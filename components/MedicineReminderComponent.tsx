import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export type MedicineReminderComponentprops = {
    medicineDetails:{
        id: String;
        title: String;
        dose: Number;
        numberOfPills: Number;
    }
}

const MedicineReminderComponent = (props: MedicineReminderComponentprops) => {
    const colorScheme = useColorScheme(); 
    return (
        <View style={styles.container}>
          {/* medicine icon */}
          <View style={styles.icon}>
            <Image 
                source={require("../assets/images/drug.png")}
                style={styles.image}
                resizeMode= "contain"
            />
          </View>
            

          {/* medicine details */}
          <View style={styles.medicineDetailsContainer}>
            <Text style={styles.title}>{props.medicineDetails.title}</Text>
            <Text style={styles.medicineDetails}>{props.medicineDetails.dose}mg, {props.medicineDetails.numberOfPills} pills</Text>
          </View>
            
          {/* three dots */}
          <View style={styles.icon}>
            <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors[colorScheme].text} />
          </View>
            
        </View>
    )
}

export default MedicineReminderComponent

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "90%",
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset:{
            height: 5,
            width: 5
        },
        borderRadius: 15,
        padding: 17,
        marginVertical: 10,
        alignSelf: "center"
    },
    icon:{
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width: 30,
        height: 30
    },
    medicineDetailsContainer:{
        flex: 1,
        marginLeft: 10,
        justifyContent: "space-around"
    },
    title:{
        fontSize: 17,
        fontWeight: "bold"
    },
    medicineDetails:{
        fontSize: 15,
        color: "grey"
    }
})
