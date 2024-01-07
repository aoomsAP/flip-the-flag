import { useContext } from "react";
import { SiteSettingsContext } from "../../../contexts/SiteSettingsContext"
import styles from "./LanguageToggle.module.css"

const LanguageToggle = () => {
    const { language, setLanguage } = useContext(SiteSettingsContext);

    // RETURNS two radio buttons to choose between two languages (english "en" and dutch "nl")

    return (
        <>
            <div className={styles.languageToggle}>

                <input type="radio" name="language" id="en" value="en" checked={language === "en"}
                    onChange={e => setLanguage(e.target.value)} />
                <label htmlFor="en">{language === "en" ? <strong>en</strong> : <>en</>}</label>

                &nbsp;|&nbsp;

                <input type="radio" name="language" id="nl" value="nl" checked={language === "nl"}
                    onChange={e => setLanguage(e.target.value)} />
                <label htmlFor="nl">{language === "nl" ? <strong>nl</strong> : <>nl</>}</label>

            </div>
        </>
    )
}

export default LanguageToggle