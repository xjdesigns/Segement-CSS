import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  HashRouter as Router,
} from 'react-router-dom'
import { createHashHistory } from 'history'
import App from './App'
import { Store } from './store/Store'
import registerServiceWorker from './registerServiceWorker'
import "./styles/css/app-visual.css"
import "./styles/css/prettify.css"
import "./styles/css/prettyprint.css"
import "./styles/css/style-guide.css"
import './styles/css/style.css'

const hashHistory = createHashHistory()

const store = createStore(
  Store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
