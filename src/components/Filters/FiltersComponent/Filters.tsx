import { Country, Range } from "../../../types"
import styles from "./Filters.module.css"

// contexts
import { useContext, useEffect, useState } from "react"
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext"
import { DataContext } from "../../../contexts/DataContext"

// filter components
import ContinentsFilter from "../ContinentsFilter/ContinentsFilter"
import SearchFilter from "../SearchFilter/SearchFilter"
import PopulationFilter from "../PopulationFilter/PopulationFilter"
import StatusFilter from "../StatusFilter/StatusFilter"
import HideFiltersButton from "../HideFiltersButton/HideFiltersButton"


interface FiltersProps {
    setFilteredCountries: (filteredCountries: Country[]) => void;
}

const Filters = ({ setFilteredCountries }: FiltersProps) => {
    // contexts
    const { language, lexicon } = useContext(SiteSettingsContext);
    const { countries } = useContext(DataContext);

    // state to show or hide filters on mobile
    const [showFilters, setShowFilters] = useState(true);

    // search filter
    const [searchString, setSearchString] = useState<string>("");

    // continents filter
    const allContinents = ["africa", "antarctica", "asia", "europe", "north america", "oceania", "south america"];
    const [checkedContinents, setCheckedContinents] = useState<string[]>(allContinents);

    // population filter
    const maxPopulation = countries.reduce((max, country) => {
        return (country.population > max) ? country.population : max;
    }, 0);
    const minPopulation = countries.reduce((min, country) => {
        return (country.population < min) ? country.population : min;
    }, maxPopulation);
    const [populationFilter, setPopulationFilter] = useState<Range>({min: minPopulation, max: maxPopulation});


    // useEffect is used because the filters need to be reapplied after any adjustment to the below filters/dependencies
    // setState is used to be able to alter the state in the parent element OverviewContainer

    useEffect(() => {
        if (countries.length > 0) {

            const newFilteredCountries = countries

                // search
                .filter(country => {
                    if (language === "en") {
                        // search in English:
                        return country.name.common.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase());
                    }
                    if (language === "nl") {
                        // search in Dutch:
                        return country.translations.nld.common.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase());
                    }
                })

                // continents
                .filter(country => {
                    // keep country if one of its continents is included in the continentsFilter array
                    let continentIncluded = false;
                    country.continents.forEach(continent => {
                        if (checkedContinents.includes(continent.toLowerCase())) continentIncluded = true;
                    })
                    return continentIncluded;
                })

                // population
                .filter(country => {
                    // keep country is population within range from filter
                    return country.population >= populationFilter.min && country.population <= populationFilter.max;
                });

            setFilteredCountries(newFilteredCountries);
        }

    }, [countries, language, setFilteredCountries, checkedContinents, populationFilter, searchString])


    // RETURNS Filters aside, with:
    // - a title container, which can be clicked to show or hide the Filters element, indicated by a chevron
    // - a form with several Filters, and a button to hide the Filters element again

    return (
        <>
            <aside className={styles.filters}>

                <div
                    className={styles.titleContainer}
                    onClick={() => setShowFilters(current => current ? false : true)}
                >
                    <h2>Filters</h2>
                    <p>{showFilters ? <>&laquo;</> : <>&raquo;</>}</p>
                </div>

                {showFilters &&
                    <form className={styles.filtersForm}>
                        <StatusFilter
                            label={lexicon.status_label}
                        />
                        <SearchFilter
                            label={lexicon.search_label}
                            setSearchString={setSearchString}
                        />
                        <ContinentsFilter
                            label={lexicon.continents_label}
                            allContinents={allContinents}
                            checkedContinents={checkedContinents}
                            setCheckedContinents={setCheckedContinents}
                        />
                        <PopulationFilter
                            label={lexicon.population_label}
                            populationRange={{min: minPopulation, max: maxPopulation}}
                            setPopulationFilter={setPopulationFilter}
                        />

                        <HideFiltersButton
                            setShowFilters={setShowFilters}
                        />
                    </form>
                }
            </aside>
        </>
    )
}

export default Filters