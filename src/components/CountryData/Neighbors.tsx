import React from "react";
import { Country } from "../../types";
import { Link } from "react-router-dom";
import Name from "./Name";

interface NeighborsProps {
    neighbors: Country[],
}

const Neighbors = ({ neighbors }: NeighborsProps) => {

    // returns the neighbors of a given country
    // - if country is undefined (e.g. when only independent countries are available, Hong Kong will not be found), nothing is returned
    // - countries are wrapped in a Link to the detail page of the respective country
    // - except for the first neighbor, a comma is added before printing

    return (
        <>
            {neighbors.map((n, i) => {
                if (n === undefined) {
                    return "";
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