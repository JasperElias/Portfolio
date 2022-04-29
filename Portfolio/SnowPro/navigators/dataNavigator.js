import React from "react";
//colors
import {Colors} from './../components/styles';
const {primary, secondary, tertiary} = Colors;

//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';

//screens
import Home from './../screens/Home';
import FieldData from './../screens/FieldData';
import CreateTripPlan from './../screens/CreateTripPlan';

const Stack = createStackNavigator();

const dataStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: tertiary,
               
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 10
                }

            }}
            initialRouteName="FieldData"
            >
                <Stack.Screen name="CreateTrip" component={CreateTripPlan}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default dataStack;