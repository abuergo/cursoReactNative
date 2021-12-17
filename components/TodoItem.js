import { Button, CheckBox, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

export const TodoItem = ({item, pressHandler, completedHandler}) => {

    return (
        <View style= {styles.item}> 
            <View style={styles.itemLeft}>
                <TouchableOpacity style = {styles.square} onPress={() => completedHandler(item.key)}></TouchableOpacity>
                <Text style= {{textDecorationLine : item.complete === 'true' ? 'line-through' : 'normal'}} >
                {item.text}
                </Text>          
            </View>  
            
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
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
            width: 24,
            height: 24,
            backgroundColor:'#F76C5E',
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
