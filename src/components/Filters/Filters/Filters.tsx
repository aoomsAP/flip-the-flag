import { Country, RadioOption, Range } from "../../../types"
import styles from "./Filters.module.css"

// contexts
import { useContext, useEffect, useState } from "react"
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext"
import { DataContext } from "../../../contexts/DataContext"

// filter components
import MultiCheckbox from "../MultiCheckbox/MultiCheckbox"
import SearchFilter from "../SearchFilter/SearchFilter"
import HideFiltersButton from "../HideFiltersButton/HideFiltersButton"
import RangeFilter from "../RangeFilter/RangeFilter"
import RadioToggle from "../RadioToggle/RadioToggle"


interface FiltersProps {
    setFilteredCountries: (filteredCountries: Country[]) => void;
}

const Filters = ({ setFilteredCountries }: FiltersProps) => {
    // contexts
    const { language, lexicon } = useContext(SiteSettingsContext);
    const { countries, status, setStatus } = useContext(DataContext);

    // show or hide filters on mobile
    const [showFilters, setShowFilters] = useState(true);

    // status filter
    const statusOptions: RadioOption[] = [
        {
            label: lexicon.status_independent,
            value: "independent?status=true",
            checked_condition: status === "independent?status=true",
        },
        {
            label: lexicon.status_all,
            value: "all",
            checked_condition: status === "all",
        }
    ]

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
    // initial populationFilter range is between the lowest and the highest population number
    const [populationFilter, setPopulationFilter] = useState<Range>({ min: minPopulation, max: maxPopulation });


    // useEffect is used because the filters need to be reapplied after any adjustment to the below filters/dependencies
    // state is used to be able to pass filtered countries to the parent element OverviewContainer

    useEffect(() => {
        let filteringCancelled = false;

        // only filter when there are countries to filter
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

            if (!filteringCancelled) setFilteredCountries(newFilteredCountries);
        }

        // cleanup
        return () => {
            filteringCancelled = true;
        }

    }, [countries, language, setFilteredCountries, checkedContinents, populationFilter, searchString])


    // RETURNS aside with FILTERS, with:

    // a title container,
    // which can be clicked to show or hide the Filters element, indicated by a chevron

    // a form with several FILTERS
    // - radio buttons that toggle STATUS of countries (triggers reloading of countries data)
    // - search field that filters the countries based on SEARCH input
    // - checkboxes that filters the countries on their CONTINENTS
    // - a number range to filter countries on POPULATION size
    // - a button to HIDE the Filters element again (only visible on mobile)

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
                        <RadioToggle
                            legend={lexicon.status_label}
                            name="status"
                            options={statusOptions}
                            onChange={setStatus}
                        />
                        <SearchFilter
                            label={lexicon.search_label}
                            setSearchString={setSearchString}
                        />
                        <MultiCheckbox
                            label={lexicon.continents_label}
                            name="continents"
                            allOptions={allContinents}
                            checkedItems={checkedContinents}
                            setCheckedItems={setCheckedContinents}
                        />
                        <RangeFilter
                            label={lexicon.population_label}
                            range={{ min: minPopulation, max: maxPopulation }}
                            setRangeFilter={setPopulationFilter}
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