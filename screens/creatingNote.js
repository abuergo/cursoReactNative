import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function creatingNote({navigation}){

    const [text, setText] = useState('');

    const goBackToNotes = () => {
        // navigation.navigate('Notes Page', {
        //     text: {text}
        // });


        Alert.alert('Save note', 'Are you sure you want to save this note?', [
            {text: 'Yes', onPress: () => navigation.navigate('Notes Page', {
                text: {text}})},{ text: 'No', onPress: () => console.log('alert closed with no')  }
          ])
        // console.log("Enviado")
        
    }

    return (
        <View style = {styles.container}>
            <ScrollView keyboardDismissMode='interactive'>
            {/* <Text>Write your note</Text> */}
            <TextInput
                multiline={true}
                style = {styles.input} 
                placeholder='Your note...'
                onChangeText = {(value) => setText(value)}
            />
            </ScrollView>

            <Button title = "Save note" color='orange' onPress = {goBackToNotes}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
        backgroundColor: '#FCECD9',
    },
    input: {
        // flex:1,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})