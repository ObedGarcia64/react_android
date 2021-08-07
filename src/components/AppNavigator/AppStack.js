import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesTabNavigator from '../BadgesScreen/BadgesTabNavigator'
import BadgeSignin from '../SignIn/BadgeSignin'
import BadgeRegister from '../Register/BadgeRegitser'
import BadgeLanding from '../BadgesLanding/BadgeLanding'
import Colors from '../../res/Colors'

const Stack = createStackNavigator();


const AppStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                headerStyle:{
                    backgroundColor:Colors.charade,
                    shadowColor: Colors.charade,
                },
                headerTintColor:Colors.white,
            }}
        >
            <Stack.Screen 
            name="BadgeLanding" 
            component={BadgeLanding} 
            options={{headerShown: false}} />
            <Stack.Screen 
            name="BadgesTabNavigator" 
            component={BadgesTabNavigator}/>
            <Stack.Screen 
            name="BadgeSignin" 
            component={BadgeSignin}/>
            <Stack.Screen 
            name="BadgeRegister" 
            component={BadgeRegister}/>
        </Stack.Navigator>
    );
}

export default AppStack;