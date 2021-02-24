/* eslint-disable no-empty-function */
import { createContext } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
})

export default LanguageContext
