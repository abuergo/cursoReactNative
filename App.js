import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import Camera from './screens/camera';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Register from './screens/register';
import { StyleSheet } from 'react-native';
import Tasks from './screens/tasks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from './firebase/config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import store from './redux/store';

const Tab = createBottomTabNavigator();

export default function App() {  
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
      setUser(user);
    } else {
      setUser(null)
    }
  });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
      <Provider store = {store}>
       <NavigationContainer>
         <Tab.Navigator
          screenOptions = {({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if(route.name === 'Camera'){
                iconName = 'camera';
                size = focused ? 25 : 20;
                color = focused ? 'orange' : 'grey';
              } else if(route.name === 'Tasks'){
                iconName = 'tasks';
                size = focused ? 25 : 20;
                color = focused ? 'orange' : 'grey';
              } else if(route.name === 'Register'){
                iconName = 'user-plus';
                size = focused ? 25 : 20;
                color = focused ? 'orange' : 'grey';
              } else if(route.name === 'Login'){
                iconName = 'sign-in-alt';
                size = focused ? 25 : 20;
                color = focused ? 'orange' : 'grey';
              }
              return (<FontAwesome5 
                name = {iconName}
                size = {size}
                color = {color}
                />)
            },
              headerRight: () => (
                user && <TouchableOpacity style = {styles.logOut} onPress={()=> handleSignOut()}>
                      <FontAwesome5 name='sign-out-alt' size={30} color={'black'}></FontAwesome5>
                    </TouchableOpacity>
              ) 
          }
          )}
         >
          {
            user ? 
            <> 
            <Tab.Screen 
              name = "Tasks"
              component = {Tasks}
            />
              <Tab.Screen 
             name = "Camera"
             component = {Camera}
             />
            </>
            :
            <>
              <Tab.Screen 
              name = "Register"
              component = {Register}
              />
              <Tab.Screen 
                name = "Login"
                component = {Login}
              />
            </>
          }         
        </Tab.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  logOut: {
    marginRight: 15,
  }
})