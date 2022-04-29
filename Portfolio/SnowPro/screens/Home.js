import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import FeedScreen from './../screens/FeedScreen';
import FieldData from './../screens/FieldData';
import CreateTripPlan from './CreateTripPlan';
const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} options={{tabBarIconStyle: {display: "none"}}}/>
            <Tab.Screen name="Data" component={FieldData} options={{tabBarIconStyle: {display: "none"}}} />
        </Tab.Navigator>
    );
}

export default Home;