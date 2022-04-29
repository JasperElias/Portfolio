import React from "react";
//colors
import {Colors} from './../components/styles';
const {primary, secondary, tertiary} = Colors;

//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';

//screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Home from './../screens/Home';
import FieldData from './../screens/FieldData';
import CreateTripPlan from './../screens/CreateTripPlan';
import TripDiscussion from "../screens/TripDiscussion";
import CreateObservation from "../screens/CreateObservation";

const Stack = createStackNavigator();

const RootStack = () => {
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
            initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen options={{headerTintColor: primary}} name="Welcome" component={Welcome}/>
                <Stack.Screen name="Home" component={Home} options={{headerLeft: (props) => null, headerShown: false}} />
                <Stack.Screen name="FieldData" component={FieldData} options={{headerLeft: (props) => null, headerShown: false}}/>
                <Stack.Screen name="Create Trip" component={CreateTripPlan} headerTitle="Plan a Trip" options={{headerShown: true}}/>
                <Stack.Screen name="TripDiscussion" component={TripDiscussion} headerTitle="Trip Discussion" />
                <Stack.Screen name="CreateObservation" component={CreateObservation} headerTitle="Field Observation"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;