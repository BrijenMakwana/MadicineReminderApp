import { FlatList, SafeAreaView, StyleSheet,LayoutAnimation,
  UIManager, 
  Animated,
  Pressable} from 'react-native';

import MedicineReminderComponent from '../components/MedicineReminderComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import UICalender from '../UIElements/UICalender';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const animatedValue = new Animated.Value(410);
  const animatedValue2 = new Animated.Value(700);
  const [isExpanded,setIsExpaned] = useState(false);
  

  const medicinereminder = [{
    id: "1",
    title: "Gapapentin",
    dose: 25,
    numberOfPills: 3,
    remarks: "After breakfast",
    medicineReminder: true
  },
  {
    id: "2",
    title: "Paracitamol",
    dose: 35,
    numberOfPills: 1,
    remarks: "Before breakfast",
    medicineReminder: false
  },
  {
    id: "3",
    title: "Crossin",
    dose: 15,
    numberOfPills: 1,
    remarks: "After Lunch",
    medicineReminder: false
  },
  {
    id: "4",
    title: "Vix",
    dose: 50,
    numberOfPills: 2,
    remarks: "After Dinner",
    medicineReminder: false
  },
  {
    id: "5",
    title: "Eye Drops",
    dose: 10,
    numberOfPills: 1,
    remarks: "After Coffee",
    medicineReminder: false
  },
  {
    id: "6",
    title: "Crossin",
    dose: 15,
    numberOfPills: 1,
    remarks: "After breakfast",
    medicineReminder: false
  },
  {
    id: "7",
    title: "Vix",
    dose: 50,
    numberOfPills: 2,
    remarks: "Before Lunch",
    medicineReminder: false
  },
  {
    id: "8",
    title: "Eye Drops",
    dose: 10,
    numberOfPills: 1,
    remarks: "After breakfast",
    medicineReminder: false
  }];
  
  const dates = [
    {
      key: "1",
      dateItem: new Date()
    },
    {
      key: "2",
      dateItem: new Date()
    },
    {
      key: "3",
      dateItem: new Date()
    },
    {
      key: "4",
      dateItem: new Date()
    },
    {
      key: "5",
      dateItem: new Date()
    },
    {
      key: "6",
      dateItem: new Date()
    },
    {
      key: "7",
      dateItem: new Date()
    },
    {
      key: "12",
      dateItem: new Date()
    },
    {
      key: "8",
      dateItem: new Date()
    },
    {
      key: "9",
      dateItem: new Date()
    },
    {
      key: "10",
      dateItem: new Date()
    },
    {
      key: "11",
      dateItem: new Date()
    },
  ];



useEffect(() => {
  if(isExpanded === true){
    Animated.timing(animatedValue, {
      toValue: 700,
      useNativeDriver: false,
      duration: 500
    }).start();
    
  }
  else{
    Animated.timing(animatedValue2, {
      toValue: 410,
      useNativeDriver: false,
      duration: 500
      
    }).start();
    
  }
  
  return () => {
    Animated.timing(animatedValue2, {
      toValue: 410,
      useNativeDriver: false,
      duration: 500
      
    }).stop();
  }
}, [isExpanded])
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calenderBlock}>
        <Text style={styles.headerTitle}>Your drug{"\n"}cabinet</Text>
        <FlatList
          data={dates}
          renderItem={({item})=> <UICalender date={item}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
      <Animated.View style={[styles.medicineBlocks,{height:isExpanded ? animatedValue : animatedValue2}]}>
        
        <FlatList
          data={medicinereminder}
          renderItem={({item})=> <MedicineReminderComponent medicineDetails={item}/>}
          keyExtractor={item=>item.id}
          ListHeaderComponent={
            <View style={styles.medicineBlockHeader}>
              <Text style={styles.title}>Today activities</Text>
              <Pressable 
                onPress={()=>setIsExpaned(!isExpanded)} 
                style={styles.expand}
              >
                <MaterialIcons 
                  name={isExpanded ? "expand-more": "expand-less"} 
                  size={24} 
                  color="#2d222b" 
                />
              </Pressable>
              
            </View>
            
          }
          showsVerticalScrollIndicator={false}
          
        />
      </Animated.View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef9ea7"
  },
  calenderBlock:{
    flex: 1,
    backgroundColor: "#ef9ea7",
   
    
  },
  headerTitle:{
    fontSize: 40,
    color: "#2d222b",
    fontWeight: "700",
    padding: 20,
    marginTop: 30
  },
  medicineBlocks:{
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    backgroundColor: "#Fdfcfa"
    
  },
  medicineBlockHeader:{
    flexDirection: "row",
    alignItems: "center",
  },
  title:{
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
    color: "#2d222b",
    flex: 1,
    marginLeft: 30,
    justifyContent: "center"
  },
  expand:{
    width: "30%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
