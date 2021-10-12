import { createElement } from 'react'
import { render } from 'react-dom'
import App from './App'

import './styles/styles.css'

render(createElement(App), document.querySelector('#root'))
