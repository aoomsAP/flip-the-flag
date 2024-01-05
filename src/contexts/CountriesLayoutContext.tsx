// CountriesLayout context is a separate context
// since it only needs to be applied to the overview page

import React, { useState } from "react";

export interface CountriesLayoutContext {
    layout: string,
    setLayout: (theme: string) => void;
}

export const CountriesLayoutContext = React.createContext<CountriesLayoutContext>({ 
    layout: "",
    setLayout: () => {}
});

export const CountriesLayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [layout, setLayout] = useState<string>("flags");

    return (
        <CountriesLayoutContext.Provider value={{
            layout: layout,
            setLayout: setLayout,
        }}>
            {children}
        </CountriesLayoutContext.Provider>
    )
}