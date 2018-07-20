import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './index.css'
import './fontawesome/fontawesome-all.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import theme from './ui-kit/theme'


const Themed = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(<Themed />, document.getElementById('root'))
registerServiceWorker()
