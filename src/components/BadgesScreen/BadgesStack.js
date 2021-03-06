import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgeLanding from '../BadgesLanding/BadgeLanding'
import BadgesScreen from './BadgesScreen'
import BadgesDetail from '../BadgesDetail/BadgesDetail'
import BadgeSignin from '../SignIn/BadgeSignin'
import BadgeRegister from '../Register/BadgeRegitser'
import Colors from '../../res/Colors'
import BadgesEdit from '../BadgesEdit/BadgesEdit'

const Stack = createStackNavigator();
//Here are the structure of the screens
const BadgesStack = () =>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                headerStyle:{
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
            },
            headerTintColor: Colors.white,
        }}>
            <Stack.Screen name="Badges" component={BadgesScreen} />
            <Stack.Screen name="BadgesDetail" component={BadgesDetail} />
            <Stack.Screen name="BadgesEdit" component={BadgesEdit} />
            <Stack.Screen name="BadgeSignin" component={BadgeSignin} />
            <Stack.Screen name="BadgeRegister" component={BadgeRegister} />
        </Stack.Navigator>
    );
}

export default BadgesStack;