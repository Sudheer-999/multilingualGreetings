import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'English',
  onLanChange: () => {},
  languageGreetingsList: [],
})

export default LanguageContext
