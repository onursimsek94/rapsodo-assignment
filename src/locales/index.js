import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import tr from './tr'

const resources = {
  en: { ...en },
  tr: { ...tr },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
