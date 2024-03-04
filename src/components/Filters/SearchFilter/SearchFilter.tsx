import styles from "./SearchFilter.module.css"

interface SearchFilterProps {
    label: string,
    setSearchString: (searchString: string) => void;
}

const SearchFilter = ({label, setSearchString }: SearchFilterProps) => {

    // RETURNS fieldset to filter on Search term

    return (
        <>
            <fieldset className={styles.search}>
                <legend>{label}</legend>
                <input
                    type="search"
                    name="search"
                    onChange={e => setSearchString(e.target.value)}
                    onSubmit={e => e.preventDefault()}
                />
            </fieldset>
        </>
    )
}

export default SearchFilter