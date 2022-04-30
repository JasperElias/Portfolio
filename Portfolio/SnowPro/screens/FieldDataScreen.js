import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { 
  View,
  Text,
  Button,
 } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const FieldDataScreen = ({navigation}) => {
    return (
      <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>FieldData</Text>
        <Button
          title="Go to Details Screen"
          onPress={() => navigation.navigate("DetailsScreen")}
        />
      </View>
    );
  };

  export default FieldDataScreen

  //create styles sheet down here