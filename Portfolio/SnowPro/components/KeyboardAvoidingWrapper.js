import React from 'react';

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeeback, Keyboard } 
from 'react-native';
import { Children } from 'react/cjs/react.development';

const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView>
                <TouchableWithoutFeeback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeeback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidingWrapper;
