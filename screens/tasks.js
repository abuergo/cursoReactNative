// import { StyleSheet, Text, View } from 'react-native'
import { Alert, Button, FlatList, Image, Keyboard, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react'

import {AddTodo} from '../components/AddTodo';
import Task from '../components/Task';
import {TodoItem} from '../components/TodoItem';

export default function Tasks(){

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1', complete: 'false'},
    { text: 'create an app', key: '2', complete: 'false' },
    { text: 'play on the switch', key: '3', complete: 'false' }
  ]);

  const completedHandler = (key) => {
    setTodos((todos)  => todos.map(todo => {
      if(todo.key == key){
        if(todo.complete === 'false'){
        todo.complete = 'true';
        } else {
        todo.complete = 'false'
        }
        return todo
      } else {
        return todo
      }
    }))
  }

  const pressHandler = (key) => {
    Alert.alert('Delete to do', 'Are you sure you want to delete it?', [
      {text: 'Yes', onPress: () => setTodos( (todos) => {
        return todos.filter(todo => todo.key != key)
    })},{ text: 'No', onPress: () => console.log('alert closed with no')  }
    ])
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((todos) => {
        return [ {text: text, key: Math.random().toString(), complete: 'false'}
          , ...todos]
    } )
    } else {
      Alert.alert('OOPS!', 'To dos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
     <TouchableWithoutFeedback onPress={ () => {
       Keyboard.dismiss();
       } }>
     <View style={styles.container}>

       <View style = {styles.tasksWrapper}> 
       <Text style={styles.sectionTitle}>To do list</Text>

         {/* to form */ }
         <View style = {styles.items}>
           {todos.length > 0 ? 
          <View>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} completedHandler={completedHandler}/>
         )}/>
          </View>
           :
           <Text>No tasks for the moment</Text>
            }
         </View>
       </View>

       <AddTodo submitHandler = {submitHandler} />

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCECD9',
  },
  content: {
    padding: 40,
  }, 
  list: {
    marginTop: 20,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});

    