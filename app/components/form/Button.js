'use strict'
import React, { Component } from 'react'
import {
    TouchableOpacity, StyleSheet, Text
} from 'react-native'

import colors                   from './../../resources/styles/colors'
import Icon                     from 'react-native-vector-icons/SimpleLineIcons'

class Button extends Component {
    render() {
        const type = this.props.type || {}
        const txtType = type + 'Txt'
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={[ styles.default, styles[type], this.props.style || {} ]}>
                { type == 'facebook' && <Icon style={[ styles.defaultTxt, styles[txtType], this.props.titleStyle || {} ]} name='social-facebook' size={20} /> }

                <Text style={[ styles.defaultTxt, styles[txtType], this.props.titleStyle || {} ]}>{ this.props.title }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    // Border button type by default
    default: {
        height: 40,
        borderRadius: 5,
        backgroundColor: colors.bgMainRed,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30
    },
    defaultTxt: {
        color: colors.txtWhite,
        fontSize: 16
    },
    facebook: {
        backgroundColor: '#3C5A99',
    },
    facebookTxt: {
        color: colors.txtWhite
    },
    // Button with background color
    submit: {
        backgroundColor: colors.bgMain
    },
    submitTxt: {
        color: colors.txtWhite
    },
    borderMain: {
        borderColor: colors.bdMain,
        borderRadius: 5,
        paddingHorizontal: 25
    },
    borderMainTxt: {
        color: colors.txtMain
    }
})

module.exports = Button
