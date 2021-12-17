import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Notes from './notes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import creatingNote from './creatingNote';

const StackForNotes = createStackNavigator()

export default function App() {
  return (
         <StackForNotes.Navigator
         >
          {/* Do not change anything, i need creatingNote charge first to pass parameters to the another screen, to avoid undefined error. */}
          <StackForNotes.Screen 
            name = "creatingNote"
            component = {creatingNote}
            options={{
              headerTitle: 'Create a note',
            }}
          />

          <StackForNotes.Screen 
            name = "Notes Page"
            component = {Notes}
            options={{
                headerTitle: 'Notes',
              }}
          />

     
        </StackForNotes.Navigator>

  );
}
