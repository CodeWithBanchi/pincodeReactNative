
import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountDown from 'react-native-countdown-component';

const Waiting = ({navigation}) =>{
 
  return(
    <View style={styles.boxcontaner} >
           <CountDown
        until={30}
        size={30}
        onFinish={() => navigation.navigate('Home')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'MM', s: 'SS'}}
      />
    
    <View>
    <Text style={styles.texts}> You  have to wait and enter pin again </Text>
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
 texts:{
   marginLeft:30,
   fontSize:15,
   fontWeight:'bold'
 },
 
});

export default Waiting;