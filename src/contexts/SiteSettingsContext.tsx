// Language related context inspired by https://hco.medium.com/create-a-multi-language-website-with-react-context-api-10f9544bee09
// useLayoutEffect inspired by https://medium.com/@VedantLahane/theme-toggle-in-reactjs-using-css-variables-and-react-context-6a91cf8abcee

// per teacher advice, both language & theme settings are part of one context, SiteSettingsContext
// because they are settings that apply to the entire site

import React, { useEffect, useState } from "react";
import { Dictionary, Lexicon } from "../types";
import en from "../assets/languages/en.json";
import nl from "../assets/languages/nl.json";

export interface SiteSettingsContext {
    // language settings:
    language: string,
    lexicon: Lexicon,
    setLanguage: (language: string) => void;

    // theme settings:
    theme: string,
    setTheme: (theme: string) => void;
}

export const SiteSettingsContext = React.createContext<SiteSettingsContext>({
    // language settings:
    language: "",
    lexicon: {},
    setLanguage: () => { },

    // theme settings:
    theme: "",
    setTheme: () => { }
});

export const SiteSettingsProvider = ({ children }: { children: React.ReactNode }) => {
    // states
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "light");
    const [language, setLanguage] = useState<string>(localStorage.getItem("language") ?? "en");

    // dictionary containing the lexicon for each available language
    const dictionary: Dictionary = { en, nl }

    // whenever theme is changed
    useEffect(() => {
        // add or remove dark-mode/light-mode class for the entire body of the website
        if (theme === "light") {
            document.documentElement.classList.remove("dark-mode");
            document.documentElement.classList.add("light-mode");
        } else {
            document.documentElement.classList.remove("light-mode");
            document.documentElement.classList.add("dark-mode");
        }

        // store theme choice in localStorage
        localStorage.setItem("theme", theme);
    }, [theme])

    // whenever language is changed
    useEffect(() => {
        // store language choice in localStorage
        localStorage.setItem("language", language);
    }, [language])

    return (
        <SiteSettingsContext.Provider value={{
            // language settings:
            language: language,
            lexicon: dictionary[language],
            setLanguage: setLanguage,

            // theme settings:
            theme: theme,
            setTheme: setTheme,
        }}>
            {children}
        </SiteSettingsContext.Provider>
    )
}