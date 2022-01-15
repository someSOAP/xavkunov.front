import { createElement } from 'react'
import { render } from 'react-dom'

import App from './App'
import './i18n'
import './styles.css'

render(createElement(App), document.querySelector('#root'))
