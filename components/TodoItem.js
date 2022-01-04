import { Button, CheckBox, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

export const TodoItem = ({item, deleteHandler, completedHandler}) => {

    return (
        <View style= {styles.item}> 
            <View style={styles.itemLeft}>
                <TouchableOpacity style = {styles.square} onPress={() => completedHandler(item.id, item.completed)}>
                    { item.completed ?
                        <FontAwesome5 name='check' size={24} color={'green'}></FontAwesome5>
                        :
                        <View></View>
                    }
                </TouchableOpacity>
                <Text style= {{textDecorationLine : item.completed ? 'line-through' : 'none'}} >
                <Text> {item.title} </Text>
                </Text>          
            </View>  
            
            <TouchableOpacity onPress={() => deleteHandler(item.id)}>
                <FontAwesome5 
                    name = 'trash'
                    color = 'red'
                    />
            </TouchableOpacity>
        </View>
    )};



    const styles = StyleSheet.create({
        item: {
            backgroundColor: '#fff',
            padding: 15, 
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20
        },
        itemLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        }, 
        square:{
            width: 22,
            height: 23,
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
            borderColor: 'grey',
            borderWidth: 2,
            borderRadius: 5,
        }
    })
