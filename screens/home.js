import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import React from 'react'

export default function Home({navigation}){

    const goToCamera = () => {
        navigation.navigate("Camera", {
            screen: 'Camera'
        })
    }

    const goToTasks = () => {
        navigation.navigate("Tasks")
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity
            style = {styles.button}
            onPress = {goToCamera}
        >
            <Text style = {styles.touchableTitle}>GO TO CAMERA</Text>    
        </TouchableOpacity>
        <TouchableOpacity
            style = {styles.button}
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
    button: {
        backgroundColor: 'orange',
        padding: 15, 
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
        marginHorizontal: 30,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 4,  
        elevation: 5
    },
    touchableTitle: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold"
    }
})