import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';

//styled components
import {
    SubTitle,
    Colors,
    Line
} from './../components/styles';

//colors
const {brand, darkLight, primary} = Colors;

import { 
  View,
  Text,
  Button
 } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

const CreateObservation = ({navigation}) => {
    return(
        <View style={{borderColor:'#6495ed', borderWidth: 3, padding: 8, height: 700}}>
            <SubTitle>FieldObservation</SubTitle>
            <Text>Trip Location:</Text> 
            <TextInput 
                label="Time"
                placeholder="00:00 AM/PM"
                placeholderTextColor={darkLight}
                multiline={false}
                style={{padding: 10}}
            />
            <TextInput 
                label="Elevation"
                placeholder="10,000ft"
                placeholderTextColor={darkLight}
                multiline={false}
                style={{padding: 10}}
            />
            <TextInput 
                label="Aspect"
                placeholder="N, E, S, W"
                placeholderTextColor={darkLight}
                multiline={false}
                style={{padding: 10}}
            />
            <Line/>
            <Text>Temperature:</Text>
            <TextInput 
                label="Temperature"
                placeholder="Temperature (F)"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            
            <TextInput 
                label="Temp 20cm Below Surface"
                placeholder="Temp 20cm Below Surface"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Line/>
            <Text>Wind:</Text> 
            <TextInput 
                label="Wind"
                placeholder="Speed/Direction"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Line/>
            <Text>Snow:</Text>
            <TextInput 
                label="NewSnow"
                placeholder="New Snow? (Inches)"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <TextInput 
                label="SurfForm"
                placeholder="Surf Form"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            
            
            <Line/>

            <Button title='Save' label='SaveTrip' onPress={() => navigation.navigate('Home')}/>  
        </View> 
    );
}

export default CreateObservation;