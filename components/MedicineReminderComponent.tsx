import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export type MedicineReminderComponentprops = {
    medicineDetails:{
        id: String;
        title: String;
        dose: Number;
        numberOfPills: Number;
        remarks: String;
        medicineReminder: Boolean;
    }
}

const MedicineReminderComponent = (props: MedicineReminderComponentprops) => {
    const colorScheme = useColorScheme(); 
    const [medicineReminder,setMedicineReminder] = useState(props.medicineDetails.medicineReminder);

    return (
        <View style={[styles.fullContainer,{
            backgroundColor: medicineReminder ? "#47488e" : "#fff"
        }]}>
            <View style={styles.halfContainer}>
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
                    <Text 
                        style={[styles.title,
                            {
                                color: medicineReminder ? "#fff" : "#2d222b"
                            }
                        ]}
                    >{
                        props.medicineDetails.title}
                    </Text>
                    <Text style={[styles.medicineDetails,{
                        color: medicineReminder ? "#dcdaeb" : "grey"
                    }]}>{props.medicineDetails.dose}mg, {props.medicineDetails.numberOfPills} pills</Text>
                </View>
                    
                {/* three dots */}
                <View style={styles.icon}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color={medicineReminder ? "#fff" : "#2d222b"} />
                </View>
            </View>
            {medicineReminder &&
                <View style={styles.reminderContainer}>
                    <Text style={[styles.remarks]}>{props.medicineDetails.remarks}</Text>
                    <View style={styles.saperator}/>
                    <View style={styles.buttons}>
                        <Pressable style={styles.button}>
                            <Entypo name="cross" size={24} color="#dcdaeb" />
                            <Text style={styles.buttonTextSkip}>Skip</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Entypo name="check" size={24} color="#fff" />
                            <Text style={styles.buttonTextDone}>Done</Text>
                        </Pressable>
                    </View>
                </View>
            }
        </View>
    )
}

export default MedicineReminderComponent

const styles = StyleSheet.create({
    fullContainer:{
        width: "87%",
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset:{
            height: 5,
            width: 5
        },
        borderRadius: 25,
        marginVertical: 15,
        alignSelf: "center"
    },
    halfContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 17,
        
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
        fontWeight: "bold",
    },
    medicineDetails:{
        fontSize: 15,
        color: "#dcdaeb"
    },
    reminderContainer:{
        padding: 10
    },
    remarks:{
        color: "#fff",
        fontSize: 16,
        marginLeft: 70,
        
        
    },
    saperator:{
        height: 1,
        backgroundColor: "#dcdaeb",
        width: "90%",
        alignSelf: "center",
        marginTop: 25
    },
    buttons:{
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button:{
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonTextSkip:{
        color: "#dcdaeb",
        marginLeft: 5
    },
    buttonTextDone:{
        color: "#fff",
        marginLeft: 5,
        fontWeight: "500"
    }
})
