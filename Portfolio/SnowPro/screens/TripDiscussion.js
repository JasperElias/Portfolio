//*import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';

//styled components
import {
    StyledContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    Line,

} from './../components/styles';

//colors
const {brand, darkLight, primary} = Colors;

import { 
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput
 } from 'react-native';


//drop down picker
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const TripDiscussion = ({navigation}) => {

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }


    return (
        <View style={{borderColor:'#6495ed', borderWidth: 3, padding: 8, height: 700}}>
            <SubTitle>Trip Discussion</SubTitle>
            <Text>Snowpack Discussion:</Text> 
            <TextInput 
                label="Snowpack Discussion"
                placeholder="Warming? New storm?"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Text>Weather Forcast:</Text>
            <TextInput 
                label="Weather Forcast"
                placeholder="Precipitation? Winds?"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Text>Notes:</Text> 
            <TextInput 
                label="Notes"
                placeholder="Packing List? Extra thoughts/reminders"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Line/>
            <Button title='Save' label='SaveTrip' onPress={() => navigation.navigate('Home')}/> 
        </View>
    );
}

export default TripDiscussion;