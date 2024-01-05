import styles from "./SearchFilter.module.css"

interface SearchFilterProps {
    label: string,
    setSearchString: (searchString: string) => void;
}

const SearchFilter = ({label, setSearchString }: SearchFilterProps) => {

    // returns fieldset to filter on Search term
    // includes MultiRangeSlider

    return (
        <>
            <fieldset className={styles.search}>
                <legend>{label}</legend>
                <input
                    type="search"
                    name="search"
                    onChange={e => setSearchString(e.target.value)}
                />
            </fieldset>
        </>
    )
}

export default SearchFilter