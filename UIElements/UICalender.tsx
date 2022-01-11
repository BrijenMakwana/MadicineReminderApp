import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export type UICalenderProps = {
    date: {
        dateItem: Date;
    }
}

const UICalender = (props: UICalenderProps) => {
    
    return (
        <View style={styles.container}>
            <Text style={[styles.date]}>{moment(props.date.dateItem).format('DD')}</Text>
            <Text style={styles.day}>{moment(props.date.dateItem).format('ddd')}</Text>
        </View>
    )
}

export default UICalender

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        width: 50,
        height: 100,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 27,
        marginLeft: 20,
        shadowOpacity: 0.1,
        elevation: 5,
        shadowOffset:{
            height: 5,
            width: 5
        },
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
