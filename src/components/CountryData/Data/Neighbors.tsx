import React, { useContext } from "react";
import { Country } from "../../../types";
import { Link } from "react-router-dom";
import Name from "./Name";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext";
import { DataContext } from "../../../contexts/DataContext";

interface NeighborsProps {
    country: Country,
}

const Neighbors = ({ country }: NeighborsProps) => {
    const { countries } = useContext(DataContext);
    const { lexicon } = useContext(SiteSettingsContext);

    // find neighbors of the country
    // API has a "borders" array that contains country codes,
    // which are used to identify the country in the countries data
    const neighbors = country.borders?.map(b => countries.find(c => c.cca3 === b) as Country);
    const hasNeighbors = country.borders ? true : false;

    // RETURNS list of neighbors of a given country
    // - if country has no neighbors, print "no neighbor"
    // - if country is undefined, "country unavailable" will be printed
    // (e.g. when only independent countries are available, Hong Kong will not be found)
    // - countries are wrapped in a Link to the detail page of the respective country
    // - except for the first neighbor, a comma is added before printing

    return (
        <>
            {!hasNeighbors && lexicon.no_neighbors}
            {hasNeighbors && neighbors.map((n, i) => {
                if (n === undefined) {
                    if (i != 0) return `, ${lexicon.country_unavailable}`;
                    return lexicon.country_unavailable;
                }
                if (i != 0) {
                    return <React.Fragment key={i}>
                        , <Link to={`/countries/${n.name.common.toLocaleLowerCase()}`}>
                            <Name country={n} />
                        </Link>
                    </React.Fragment>
                }
                else {
                    return <Link key={i}
                        to={`/countries/${n.name.common.toLocaleLowerCase()}`}>
                        <Name country={n} />
                    </Link>
                }
            })}
        </>
    )
}

export default Neighbors