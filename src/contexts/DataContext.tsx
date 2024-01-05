// DataContext is one separate context since it's not a setting
// and keeping it separately improves readability of the code

import React, { useState, useEffect } from "react";
import { Country } from "../types";

export interface DataContext {
    countries: Country[],
    setCountries: (countries: Country[]) => void;
    mode: string,
    setMode: (mode: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const DataContext = React.createContext<DataContext>({ 
    countries: [], 
    setCountries: () => {}, 
    mode: "",
    setMode: () => {},
    loading: false, 
    setLoading: () => {} 
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    // states
    const [countries, setCountries] = useState<Country[]>([]); // stores the countries data from the API
    const [mode, setMode] = useState<string>("independent?status=true"); // stores the status of the countries that need to be fetched
    const [loading, setLoading] = useState<boolean>(false); // stores loading status

    useEffect(() => {
        const loadCountries = async () => {
            // function to fetch country data starts, so loading state is set to true
            setLoading(true);

            // countries data is fetched & countries state is set
            // if mode is "all", then all countries in the API are fetched
            // if mode is "independent?status=true", then only independent "official" countries are fetched
            const response = await fetch(`https://restcountries.com/v3.1/${mode}`);
            const countries: Country[] = await response.json();
            setCountries(countries);

            // countries are loaded into state, so loading state is set to false
            setLoading(false);
        }

        loadCountries();
        // loadCountries is executed once
        // unless "mode" state is altered, then countries are loaded anew
        
    }, [mode]);

    return (
        <DataContext.Provider value={{
            countries: countries,
            setCountries: setCountries,
            mode: mode,
            setMode: setMode,
            loading: loading,
            setLoading: setLoading
        }}>
            {children}
        </DataContext.Provider>
    )
}