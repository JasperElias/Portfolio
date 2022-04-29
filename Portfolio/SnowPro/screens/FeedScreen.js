import React from 'react';
import { StatusBar } from 'expo-status-bar';
//keyboardAvoidingWrapper
//wrap around the styled container
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import { ImageBackground, Text, TextLayout, View, TouchableOpacity, Button, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';

import {
    FeedContainer,
    Line,
    TextLink,
    TextLinkContent,
    
  } from './../components/styles';

const FeedScreen = ({navigation}) => {
    
    return (
        <View>
            <ImageBackground
                style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
                source={require('./../assets/FeedBackground.png')}
            />
            <StatusBar style="dark"/>
            <ScrollView style={{backgroundColor:'transparent'}}> 
            <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> jasperladkin </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 04/11/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Wasatch Mountains, Lone Peak Area </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Epic pow day... </Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> JohnDavid </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 04/09/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Wasatch Mountains, Wolverine Bowl</Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Skied granny chute, I am granny...</Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Login")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> jasperladkin </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 04/02/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Wasatch Mountains, Cardiff Bowl </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Hard crust, nervous about aft... </Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> jasperladkin </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 03/23/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Uinta Range, Wolf Creek </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Observed a slide on NE... </Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> ronnyBurlow </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 03/23/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Wasatch Mountains, Mt. Baldy </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Coverage was minimal. Concerns f... </Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> JohnDavid </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 03/18/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Uinta Range, Mirror Lake Highway </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Mid morning snow was good...</Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> jasperladkin </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 04/13/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Wasatch Range, Snake Creek </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Skied ant knolls, had good... </Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                <FeedContainer>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Username: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> elanMusk </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Date/Time: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> 04/10/2022 </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Location: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Lake Tahoe, Sun Valley </Text>
                    </Text>
                    <Text style={{textAlign: 'left', fontStyle: 'italic', fontWeight: 'bold'}} > 
                        Description: <Text style={{fontWeight: 'normal', fontStyle: 'normal'}}> Classic resort day... </Text>
                    </Text>
                    <TextLink style={{textAlign: 'right'}} onPress={() => navigation.navigate("Signup")}>
                        <TextLinkContent style={{textAlign: 'right'}}>More...</TextLinkContent>
                    </TextLink>
                </FeedContainer>
                <Line style={{backgroundColor: "transparent"}}/>
                
            </ScrollView>
        </View>
    );
}

export default FeedScreen;