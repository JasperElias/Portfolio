import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar

} from './../components/styles';

const Welcome = ({navigation}) => {
    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage  resizeMode="cover" source={require('./../assets/welcomeImage.png')} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome Jasper!</PageTitle>
                    <SubTitle welcome={true}>Jasper Ladkin</SubTitle>
                    <SubTitle welcome={true}>jasperladkin@gmail.com</SubTitle>

                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/snowflake-icon.png')} />

                        <Line/>
                        
                        <StyledButton onPress={() => {
                            navigation.navigate('Home');
                        }}>
                            <ButtonText>Home</ButtonText>
                        </StyledButton>
                        
                        
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;