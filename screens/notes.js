import { Button, FlatList, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Notes({route, navigation}){

    const { text } = route.params;
    
    const goToCreateNotes = () => {
        navigation.navigate('creatingNote')
        // guarda la nota en notas
        console.log(text.text)
    }

    const saveNote = () => {
        setTask(text.text)
        console.log("Saved text: " + text.text);
    }

    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);

    const addTaskHandler = () => {
        setTaskItems([...taskItems, task])
        setTask(null);
        console.log(taskItems)
    }

    return (
        <View style = {styles.container}>
            <Button title="Create a note" onPress = {goToCreateNotes} color='black' />

            <Text> If you wrote something before and you want to show it, do the following: 
                
            </Text>
            <Text>1. Press save the previous note</Text>
            <Text>2. Press charge and show the previous note</Text>
        
            <Text>I'm working in improve that. Sorry! :D</Text>
            <Button title="1- Save the previous note" onPress = {saveNote} color='red' />
            <Button title="2- Charge and show the previous note" onPress = {addTaskHandler}/>


            <View style={styles.items}>
                {
                    taskItems.map((item,index) => {
                        return (
                            <View style= {styles.item}> 
                                <View style={styles.itemLeft}>
                                    <View style = {styles.square}></View>
                                        <Text style={styles.itemText}> {item} </Text>            
                                </View>
                            </View>
                        )
                    } 
                    ) 
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
        backgroundColor: '#FCECD9',
    },
      items: {
        marginTop: 30,
      },
      item: {
        backgroundColor: '#fff',
        padding: 15, 
        borderRadius: 10,
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }, 
    square:{
        width: 10,
        height: 10,
        backgroundColor:'orange',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    }, 
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }
})