import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth } from '../firebase/config';

export default function register(){
    const [form, setForm] = useState({username: "", email: "", password: "", confirmPass: ""})
    const [error, setError] = useState("")

    const handlePress = () => {
        // Metodo asincrono -> Promise (tiene un .then)
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: form.username
                })
                .then(response => console.log(response) )
                .catch(error => setError(error))
                .finally( ()=> {
                    alert("User created!")
                    //Se desmonta el componente, por lo tanto no es necesario limpiar este form.
                    // setForm({username: "", email: "", password: "", confirmPass: ""})
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                setError({error})
            });
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>User registration</Text>
            <Text>Please, fill out all the gaps to proceed</Text>
            <TextInput style = {styles.input}
                placeholder = "Username"
                blurOnSubmit = {true}
                onChangeText = {text => setForm({...form, username: text})}
                value = {form.username}
            />
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
            <TextInput style = {styles.input}
                placeholder = "Confirm password"
                secureTextEntry = {true}
                onChangeText = {text => setForm({...form, confirmPass: text})}
                value = {form.confirmPass}
            /> 
            {error !== "" && <Text>{error.error.message}</Text>}
            <TouchableOpacity
                style = {styles.button}
                onPress = {( ) => handlePress()}
            >
                <Text style = {styles.touchableTitle}>
                    REGISTER
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