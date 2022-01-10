import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import MedicineReminderComponent from '../components/MedicineReminderComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const medicinereminder = [{
    id: "1",
    title: "Gapapentin",
    dose: 25,
    numberOfPills: 2
  },
  {
    id: "2",
    title: "Paracitamol",
    dose: 35,
    numberOfPills: 1
  },
  {
    id: "3",
    title: "Crossin",
    dose: 15,
    numberOfPills: 1
  },
  {
    id: "4",
    title: "Vix",
    dose: 50,
    numberOfPills: 2
  },
  {
    id: "5",
    title: "Eye Drops",
    dose: 10,
    numberOfPills: 1
  },
  {
    id: "6",
    title: "Crossin",
    dose: 15,
    numberOfPills: 1
  },
  {
    id: "7",
    title: "Vix",
    dose: 50,
    numberOfPills: 2
  },
  {
    id: "8",
    title: "Eye Drops",
    dose: 10,
    numberOfPills: 1
  }];
  
  return (
    <SafeAreaView style={styles.container}>
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
    justifyContent: "flex-end",
  },
  title:{
    fontSize: 22,
    fontWeight: "bold",
    padding: 5,
    marginLeft: 30
  },
  medicineBlocks:{
    backgroundColor: '#Fdfcfa',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "65%",
    paddingTop: 20,
    
  }
});
