import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
/*************screens******************/
import {
    Home,
    SearchPlace
} from '../screens';
  
const Stack = createStackNavigator(); 

const Main = ({
    params,
    navigation,
}) => {

    const navigationRef = React.createRef();
    const navigate = (name, params) => {
        // navigationRef.current?.navigate(name, params);
        navigationRef.navigate(name, params);
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    // gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#000'
                }}>



                <Stack.Screen name='Home' component={Home} options={({ route }) => ({
                    headerShown: false,
                    title: ''
                })} />
               
                <Stack.Screen name='SearchPlace' component={SearchPlace} options={({ route }) => ({
                    headerShown: false,
                    title: ''
                })} />
               

            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Main;
