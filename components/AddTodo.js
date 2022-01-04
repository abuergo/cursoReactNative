import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

export const AddTodo = ({submitHandler} ) => {
    const [text, setText] = useState('');
    const myTextInput = React.createRef();
    
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
            <TextInput
                ref={myTextInput}
                style = {styles.input} 
                placeholder='New todo...'
                onChangeText = {(value) => setText(value)}

            />
        <TouchableOpacity onPress={() =>  
            { submitHandler(text);
              setText('');
              myTextInput.current.clear()
            }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
            </KeyboardAvoidingView>
    )   
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 280,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: 'orange',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      addText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
})