import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import i18nBackend from 'i18next-http-backend'
import { DEFAULT_NS, ENG_LANG } from '@/constants'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .use(i18nBackend)
    .init({
        load: 'languageOnly',
        detection: {
            order: ['localStorage', 'navigator', 'querystring'],
        },
        fallbackNS: DEFAULT_NS,
        defaultNS: DEFAULT_NS,
        fallbackLng: ENG_LANG,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    })

export default i18n
