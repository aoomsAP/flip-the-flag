// DataContext is one separate context since it's not a setting
// and keeping it separately improves readability of the code

import React, { useState, useEffect } from "react";
import { Country } from "../types";

export interface DataContext {
    countries: Country[],
    setCountries: (countries: Country[]) => void;
    status: string,
    setStatus: (status: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const DataContext = React.createContext<DataContext>({
    countries: [],
    setCountries: () => { },
    status: "",
    setStatus: () => { },
    loading: false,
    setLoading: () => { }
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    // states
    const [countries, setCountries] = useState<Country[]>([]); // stores the countries data from the API
    const [status, setStatus] = useState<string>("independent?status=true"); // stores the status of the countries that need to be fetched
    const [loading, setLoading] = useState<boolean>(false); // stores loading status

    useEffect(() => {
        let isCancelled = false;

        const loadCountries = async () => {
            // function to fetch country data starts, so loading state is set to true
            setLoading(true);

            // countries data is fetched & countries state is set
            // - if status is "all", then all countries in the API are fetched
            // - if status is "independent?status=true", then only independent "official" countries are fetched
            try {
                const response = await fetch(`https://restcountries.com/v3.1/${status}`);
                const countries: Country[] = await response.json();

                // shuffle countries before storing in state as to always have a random order at the start
                const shuffledCountries = countries.sort(() => Math.random() - 0.5);

                // only set countries if not cancelled
                if (!isCancelled) setCountries(shuffledCountries);
            }
            catch (error) {
                if (!isCancelled) console.log(error);
            }

            // countries are loaded into state, so loading state is set to false
            setLoading(false);
        }

        // execute loadCountries
        loadCountries();

        // cleanup: if component is unmounted, set isCancelled to true
        return () => {
            isCancelled = true;
        }

        // useEffect is fired every time "status" state is altered: countries are loaded anew
    }, [status]);

    return (
        <DataContext.Provider value={{
            countries: countries,
            setCountries: setCountries,
            status: status,
            setStatus: setStatus,
            loading: loading,
            setLoading: setLoading
        }}>
            {children}
        </DataContext.Provider>
    )
}