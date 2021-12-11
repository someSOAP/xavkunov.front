import { createElement } from 'react'
import { render } from 'react-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import App from './App'
import './styles/styles.css'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
        },
        fallbackLng: 'ru',
        resources: {
            en: {
                translation: {
                    welcome: 'Welcome to my page',
                    me: 'it`s me',
                    dream: 'and this is my dream',
                },
            },
            ru: {
                translation: {
                    welcome: 'Добро пожаловать на мою страничку',
                    me: 'это я',
                    dream: 'а это моя мечта',
                },
            },
        },
    })

render(createElement(App), document.querySelector('#root'))
