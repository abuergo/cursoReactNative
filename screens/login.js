import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login(){
    const [error, setError] = useState("");
    const [form, setForm] = useState({email: "", password: ""})

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential);
                setForm({email: "", password: ""})
                // ...
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message);
            });
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Login</Text>
            <TextInput style = {styles.input}
                placeholder = "Email"
                blurOnSubmit = {true}
                textContentType = "emailAddress"
                onChangeText = {text => setForm({...form, email: text})}
                value = {form.email}
            />
            <TextInput style = {styles.input}
                placeholder = "Password"
                secureTextEntry = {true}
                onChangeText = {text => setForm({...form, password: text})}
                value = {form.password}
            />
            
            {error !== "" && <Text>{error}</Text>}
            <TouchableOpacity
                style = {styles.button}
                onPress = {( ) => handleLogin()}
            >
                <Text style = {styles.touchableTitle}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        backgroundColor:"#FCECD9",
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20
    },  
    input: {
        padding: 7,
        width: '80%',
        backgroundColor: "white",
        borderColor: "#C57400",
        borderWidth: 1,
        borderRadius: 5,
        color: "black",
        marginVertical: 4,
        marginTop: 10
        },
    button: {
        marginTop: 10,
        backgroundColor: 'orange',
        padding: 15, 
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 4,  
        elevation: 5
        },
    touchableTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: 'white'
        },
})