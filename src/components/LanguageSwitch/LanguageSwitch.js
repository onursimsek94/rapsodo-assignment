import { useContext } from 'react'
import i18n from '../../locales'
import cx from 'classnames'
import LanguageContext from '../../contexts/language-context'

const LanguageSwitch = ({ className }) => {
  const { language, setLanguage } = useContext(LanguageContext)
  const classNames = cx('ra-language-switch', className)

  const handleLanguageButtonClick = (lang) => {
    if (lang !== language) {
      setLanguage(lang)
      i18n.changeLanguage(lang)
    }
  }

  return (
    <div className={classNames}>
      <button
        className={cx({ active: language === 'en' })}
        onClick={() => handleLanguageButtonClick('en')}
      >
        EN
      </button>

      <button
        className={cx({ active: language === 'tr' })}
        onClick={() => handleLanguageButtonClick('tr')}
      >
        TR
      </button>
    </div>
  )
}

export default LanguageSwitch
