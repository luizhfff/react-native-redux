import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import AddItem from '../components/ToDoList/AddItem';
import DisplayItems from '../components/ToDoList/DisplayItems';

const Main = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />
      <AddItem />
      <DisplayItems />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#343434',
    height: Dimensions.get('window').height,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  button1: {
    width: 100,
    marginLeft: 50,
    marginTop: 50,
  },
});
