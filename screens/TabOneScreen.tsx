import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import MedicineReminderComponent from '../components/MedicineReminderComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import UICalender from '../UIElements/UICalender';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

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
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Your drug{"\n"}cabinet</Text>
      <UICalender/>
      <View style={styles.medicineBlocks}>
        
        <FlatList
          data={medicinereminder}
          renderItem={({item})=> <MedicineReminderComponent medicineDetails={item}/>}
          keyExtractor={item=>item.id}
          ListHeaderComponent={
            <Text style={styles.title}>Today activities</Text>
          }
          
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ef9ea7",
    justifyContent: "space-between",
  },
  headerTitle:{
    fontSize: 40,
    color: "#2d222b",
    fontWeight: "700",
    padding: 20,
    marginTop: 30
  },
  medicineBlocks:{
    backgroundColor: '#Fdfcfa',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "57%",
    paddingTop: 20,
    
  },
  title:{
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
    marginLeft: 30,
    color: "#2d222b"
  }
});
