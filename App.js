import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import NotesStackScreen from './screens/notesStackScreen';
import React from 'react';
import Tasks from './screens/tasks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
       <NavigationContainer>
         <Tab.Navigator
          screenOptions = {({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if(route.name === 'Home'){
                iconName = 'home';
                size = focused ? 25 : 20;
                color = focused ? 'orange' : 'grey';
              } else if(route.name === 'Notes'){
                iconName = 'sticky-note';
                size = focused ? 25 : 20;
                color = focused ? 'orange' : 'grey';
              } else if(route.name === 'Tasks'){
                iconName = 'tasks';
                size = focused ? 25 : 20;
                color = focused ? 'orange' : 'grey';
              }
              return (<FontAwesome5 
                name = {iconName}
                size = {size}
                color = {color}
                />)
            }
          })}
         >
           <Tab.Screen 
             name = "Home"
             component = {Home}
           />
          <Tab.Screen 
            name = "Notes"
            component = {NotesStackScreen}
            options={{
              headerShown: false }}
          />
          <Tab.Screen 
            name = "Tasks"
            component = {Tasks}
          />
        </Tab.Navigator>
      </NavigationContainer>

  );
}
