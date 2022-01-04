import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { addTodo, deleteTodo, toggleComplete } from '../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

import {AddTodo} from '../components/AddTodo';
import React from 'react'
import {TodoItem} from '../components/TodoItem';

export default function Tasks(){  
  const { todos } = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const submitHandler = (text) => {
    dispatch(addTodo({title: text}));
  }

  const completedHandler = (itemId, itemCompleted) => {
    dispatch(toggleComplete({id: itemId, completed: !itemCompleted }))
  }    

  const deleteHandler = (itemId) => {
    Alert.alert('Delete to do', 'Are you sure you want to delete it?', [
      {text: 'Yes', onPress: () => dispatch(deleteTodo({id: itemId}))},
      { text: 'No', onPress: () => console.log('alert closed with no')}
    ])
  }
  

  return (
     <TouchableWithoutFeedback onPress={ () => {
       Keyboard.dismiss();
       } }>
     <View style={styles.container}>

       <View style = {styles.tasksWrapper}> 
       <Text style={styles.sectionTitle}>To do list</Text>

         <View style = {styles.items}>

           {todos.length > 0 ? 
          <View>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} deleteHandler = {deleteHandler} completedHandler={completedHandler}/>
         )}/>
          </View>
           :
           <Text>No tasks so far</Text>
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

    