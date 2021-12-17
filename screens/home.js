import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import NotesStackScreen from './notesStackScreen';
// import {Button} from 'react-native-web';
import React from 'react'
import creatingNote from './creatingNote'
import { useNavigation } from '@react-navigation/native'

export default function Home({navigation}){

    const goToNotes = () => {
        navigation.navigate("Notes", {
            screen: 'Notes'
        })
    }

    const goToTasks = () => {
        navigation.navigate("Tasks")
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity
            style = {styles.boton}
            onPress = {goToNotes}
        >
            <Text style = {styles.touchableTitle}>GO TO NOTES</Text>    
        </TouchableOpacity>
        <TouchableOpacity
            style = {styles.boton}
            onPress = {goToTasks}
        >
            <Text style = {styles.touchableTitle}>GO TO TASKS</Text>    
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
        backgroundColor: '#FCECD9',
    },
    boton: {
        backgroundColor: 'orange',
        padding: 15, 
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
        marginHorizontal: 30
    },
    touchableTitle: {
        fontSize: 15,
        fontWeight: "bold"
    }



})