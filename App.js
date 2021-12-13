import { Alert, Button, FlatList, Image, Keyboard, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';

import { AddTodo } from './components/AddTodo';
import Header from './components/Header';
import { TodoItem } from './components/TodoItem';

// import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1', complete: 'false'},
    { text: 'create an app', key: '2', complete: 'false' },
    { text: 'play on the switch', key: '3', complete: 'false' }
  ]);

  const completedHandler = (key) => {
    console.log(key)
    setTodos((todos)  => todos.map(todo => {
      if(todo.key == key){
        todo.complete = 'true';
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
       console.log('dismissed keyboard');
       } }>
     <View style={styles.container}>
       <Header />

       <AddTodo submitHandler = {submitHandler} />
       <View style = {styles.content}> 
         {/* to form */ }
         <View style = {styles.list}>
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
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, 
    paddingHorizontal: 20
  },
  content: {
    padding: 40,
  }, 
  list: {
    marginTop: 20,
  }
});

