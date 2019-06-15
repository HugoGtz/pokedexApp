import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'

const store = createStore(rootReducer)

window.$axios = axios

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
