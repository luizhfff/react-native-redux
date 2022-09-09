import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ITEM } from '../../store/ToDoList/actions';

const DisplayItems = () => {
  const dispatch = useDispatch();
  const ToDoList = useSelector((state) => state.ToDoList);

  return (
    <View style={styles.displayItems}>
      <Text style={styles.title}>List</Text>
      <ScrollView>
        {ToDoList.items &&
          ToDoList.items.map((item, index) => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.itemText}>{item.text}</Text>
              <TouchableHighlight
                style={styles.itemDelete}
                onPress={() => dispatch({ type: DELETE_ITEM, id: item.id })}>
                <Text style={styles.itemDeleteText}>Delete</Text>
              </TouchableHighlight>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default DisplayItems;

const styles = StyleSheet.create({
  displayItems: {
    backgroundColor: '#343434',
    flex: 7,
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
    alignSelf: 'center',
  },
  itemText: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    flex: 3,
  },
  itemDelete: {
    flex: 1,
    backgroundColor: '#1B41A1',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: '5%',
    borderWidth: 1,
    borderColor: '#1B41A1',
    borderRadius: 10,
    alignItems: 'center',
  },
  itemDeleteText: {
    color: 'white',
    fontFamily: 'Poppins-Light',
  },
});
