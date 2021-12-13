import { Button, CheckBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

export const TodoItem = ({item, pressHandler, completedHandler}) => {
    return (
        <View style={styles.containerItem}>

                <Text style= {{textDecorationLine : item.complete === 'true' ? 'line-through' : 'normal'}}>
                {item.text}
                </Text> 

        <View style= {styles.botones}>
          <Button title = "C" onPress = { () => completedHandler(item.key) } color = 'green' />  
          <Button title = "X" onPress = { () => pressHandler(item.key) } color = 'red' />  
        </View>
        </View>  
    )};


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }, 
    containerItem: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: '3%'
    },
    botones: {
        flexDirection: 'row',
        marginVertical: '3%',
        padding: 10
    }
})
