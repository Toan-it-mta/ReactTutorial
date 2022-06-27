import { Pressable, StyleSheet, Text } from "react-native"
import React from "react"

/**
 * 
 * @param {{onPreesFunction: string, text: string}} props 
 */

const CustomButton = (props) => (
    <Pressable onPress={props.onPressFunction} style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 19,
    },
    button: {
        backgroundColor: '#00ff00',
        height: 60,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
})


export default CustomButton
