import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UICalender = () => {
    console.log(new Date());
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{moment(new Date()).format('DD')}</Text>
            <Text style={styles.day}>{moment(new Date()).format('ddd')}</Text>
        </View>
    )
}

export default UICalender

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        width: "14%",
        height: "15%",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 27,
        marginHorizontal: 20
    },
    date:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#2d222b"
    },
    day:{
        fontSize: 15,
        fontWeight: "300",
        color: "#2d222b"
    }
})
