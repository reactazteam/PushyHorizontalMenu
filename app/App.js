'use strict'
import React, { Component } from 'react'
import {
    AppRegistry
} from 'react-native'

import PushyHorizontalMenu from './screens/drawers/PushyHorizontalMenu'

class App extends Component {
    render() {
        return <PushyHorizontalMenu />
    }
}

AppRegistry.registerComponent('PushyHorizontalMenu', () => App);
