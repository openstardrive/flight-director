import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import reducer from './station/reducer'
import Station from './station'

require('./index.css')

let createStoreWithThunks = applyMiddleware(thunk)(createStore)
let store = createStoreWithThunks(reducer)

render(
    <Provider store={store}>
        <Station />
    </Provider>,
    document.getElementById("app")
)
