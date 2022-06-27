import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenA = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.headers}><Text>HEADER</Text></View>
            <View style={styles.body}><Text>HEADER</Text></View>
            <View style={styles.footer}><Text>HEADER</Text></View>
        </View>
    )
}

export default ScreenA

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headers: {
        flex: 1,
        backgroundColor: '#352641',
        borderWidth: 10,
        borderBottomLeftRadius: 100
    },
    body: {
        flex: 2,
        backgroundColor: '#241332'
    },
    footer: {
        flex: 1,
        backgroundColor: '#352641',
    }


})