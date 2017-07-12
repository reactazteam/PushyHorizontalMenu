import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, Button, Dimensions, Animated } from 'react-native'
import Interactable from 'react-native-interactable'
import Icon                     from 'react-native-vector-icons/FontAwesome'
import Menu                     from './../../components/Menu'
import DemoScreen               from './../DemoScreen'
import colors                   from './../../resources/styles/colors'

const Screen = Dimensions.get('window')
const SideMenuWidth = 300
const RemainingWidth = Screen.width - SideMenuWidth

export default class SideMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deltaX: new Animated.Value(-SideMenuWidth),
            menuOpened: false
        }
        this.deltaX = new Animated.Value(0)
    }

    render() {
        return (
            <View style={styles.container}>
                <Menu />
                <Interactable.View
                    style={{ flex: 1}}
                    ref='menuInstance'
                    horizontalOnly={true}
                    snapPoints={[{x: 0, damping: 0.6}, {x: SideMenuWidth, damping: 0.6}] }
                    boundaries={{right: SideMenuWidth}}
                    initialPosition={{x: 0}}
                    animatedValueX={this.deltaX}
                    onSnap={ this.onStopInteraction.bind(this) }
                >
                    <DemoScreen style={ styles.demoScreen } navigation={this.props.navigation} onMenuPress={ this.onMenuPress } />
                </Interactable.View>
            </View>
        )
    }

    onStopInteraction(event, check) {
        let menuOpened = true
        if(event.nativeEvent.index == 0) {
            menuOpened = false
        }
        this.setState((preState, props) => {
            return { menuOpened }
        })
    }

    onMenuPress = () => {
        const menuOpened = !this.state.menuOpened
        if(menuOpened) {
            this.refs['menuInstance'].snapTo({index: 1})
        } else {
            this.refs['menuInstance'].snapTo({index: 0})
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: colors.bgMain,
    },
    demoScreen: {
        backgroundColor: colors.bgMainRed
    },

    header: {
        height: 60,
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        zIndex: 1001
    },
    body: {
        flex: 1,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    menuIcon: {
        width: 30,
        height: 30
    },
    headerTitle: {
        marginLeft: 30,
        color: 'white',
        fontSize: 20
    },
    content: {
        fontSize: 18
    }
})
