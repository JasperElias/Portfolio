import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  View,
  Text,
  ImageBackground,
 } from 'react-native';

 
import {
  StyledButton,
  ButtonText,
  Colors,
} from './../components/styles';
 //colors
const {brand, darkLight, primary} = Colors;
 
const FieldData = ({navigation}) => {
    return (
      <View style = {{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: Colors.brand}}>
        <ImageBackground
                style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
                source={require('./../assets/FeedBackground.png')}
            />
        <StatusBar style="dark"/>
        <StyledButton style= {{backgroundColor: Colors.tertiary}} onPress={() => navigation.navigate('Create Trip')}>
          <ButtonText>+ Trip Plan</ButtonText>
        </StyledButton>

        <StyledButton style= {{backgroundColor: Colors.tertiary}}onPress={() => navigation.navigate('CreateObservation')}>
          <ButtonText>+ Field Observation</ButtonText>
        </StyledButton>
        <StyledButton style= {{backgroundColor: Colors.tertiary}}onPress={() => navigation.navigate("DetailsScreen")}>
          <ButtonText>+ Snow Profile</ButtonText>
        </StyledButton> 
        
      </View>
    );
  };

  export default FieldData;