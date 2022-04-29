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

const CreateTripPlan = ({navigation}) => {
    const [dot, setDot] = useState('');
    const [location, setLocation] = useState('');
    const [travelPlan, setTravelPlan] = useState('');
    const [emPlan, setEmPlan] = useState('');

    const [openAspects, setOpenAspects] = useState(false);
    const [openSnowTypes, setOpenSnowTypes] = useState(false);
    const [value, setValue] = useState('');
    const [aspects, setAspects] = useState([
        {label: 'North', value: 'North'},
        {label: 'NorthEast', value: 'NorthEast'},
        {label: 'East', value: 'East'},
        {label: 'SouthEast', value: 'SouthEast'},
        {label: 'South', value: 'South'},
        {label: 'SouthWest', value: 'SouthWest'},
        {label: 'West', value: 'West'},
        {label: 'NorthWest', value: 'NorthWest'}
    ]);

    const [snowTypes, setSnowTypes] = useState([
        {label: 'LooseDry', value: 'LooseDry'},
        {label: 'LooseWet', value: 'LooseWet'},
        {label: 'WetSlab', value: 'WetSlab'},
        {label: 'StormSlab', value: 'StormSlab'},
        {label: 'WindSlab', value: 'WindSlab'},
        {label: 'Persist.Slab', value: 'Persist.Slab'},
        {label: 'DeepSlab', value: 'DeepSlab'},
        {label: 'Cornice', value: 'Cornice'}
    ]);
    
    return (
        <View style={{borderColor:'#6495ed', borderWidth: 3, padding: 8, height: 700}}>
            <SubTitle>Plan a Trip</SubTitle>
            <Text>Date of Trip:</Text> 
            <TextInput 
                label="Date of Trip"
                placeholder="mm/dd/yyyy"
                placeholderTextColor={darkLight}
                multiline={false}
                style={{padding: 10}}
            />
            <Text>Location:</Text>
            <TextInput 
                label="Field Location"
                placeholder="White Pine, Wasatch Mountains"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Text>Travel Plan:</Text> 
            <TextInput 
                label="Travel Plan"
                placeholder="Objectives? Hazards?"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Text>Emergency Plan:</Text>
            <TextInput 
                label="EmergencyPlan"
                placeholder="Evac Plan?"
                placeholderTextColor={darkLight}
                multiline={true}
                style={{padding: 10}}
            />
            <Line/>
            
            <Text style={{padding: 3}}>Aspects:</Text>
                <TextInput 
                    label="Aspects"
                    placeholder="NW, NE, E..."
                    placeholderTextColor={darkLight}
                    multiline={true}
                    style={{padding: 10}}
                />

            <Text style={{padding: 3}}>Expected Snow Types:</Text>
                <TextInput 
                    label="SnowTypes"
                    placeholder="Storm slab, Wet slab, light powder..."
                    placeholderTextColor={darkLight}
                    multiline={true}
                    style={{padding: 10}}
                />
            <Line/>

            <Button title='Next' label='Next' onPress={() => navigation.navigate('TripDiscussion')}/> 
        </View> 
    );
}

export default CreateTripPlan;

//DropDownPicker attempt
/*<Text style={{padding: 5}}>Aspect:</Text>
            <DropDownPicker
                multiple={true}
                open={openAspects}
                items={aspects}
                setOpen={setOpenAspects}
                maxHeight={400}
                label="Snow Type"
                style={{
                    padding: 10,
                    position: 'relative'
                }}
                onChangeItem={item => console.log(item.label, item.value)}
            />

            <Text style={{padding: 5}}>Snow Types:</Text>
            <DropDownPicker
                multiple={true}
                open={openSnowTypes}
                items={snowTypes}
                setOpen={setOpenSnowTypes}
                maxHeight={400}
                label="Snow Type"
                style={{
                    padding: 10,
                }}
                onChangeItem={item => console.log(item.label, item.value)}
            /> */


//text input options
/*
<Text>Aspects:</Text>
    <TextInput 
        label="Aspects"
        placeholder="NW, NE, E..."
        placeholderTextColor={darkLight}
        multiline={true}
        style={{padding: 10}}
    />


<Text>Expected Snow Types:</Text>
    <TextInput 
        label="SnowTypes"
        placeholder="Storm slab, Wet slab, light powder..."
        placeholderTextColor={darkLight}
        multiline={true}
        style={{padding: 10}}
    />
*/