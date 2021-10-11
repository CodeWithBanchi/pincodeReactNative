
import { Alert, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity,useState, View } from "react-native";
import Loading from './Loading';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Waiting from './Waiting'

const Buttons = ({navigation}) => {
  
  const switchHandler = () => {
    navigation.navigate('Wait')
  }

    
  function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

    const [defaultCode , _] = React.useState([1,2,3,4]) 
    const [passcode , setPasscode] = React.useState(['','','',''])
    const [buttonCounter , seButtonCounter] = React.useState(0)
    const [errorCounter,seterrorCounter] = React.useState(0)

    const presControl = num =>{
      if (buttonCounter >= 4) return ;
      let tempCode = [...passcode];
      tempCode[buttonCounter] = num
      seButtonCounter(buttonCounter+1)
      setPasscode(tempCode);
      if( buttonCounter === 3) {
        console.log(tempCode,defaultCode)
      checkPinCode(tempCode,defaultCode)
      }
    }

    const checkPinCode = (a,b) => {
            if(arrayEquals(a,b)){
                alert("Login success")
              }else {
                alert(" Login Failed  ");
                seterrorCounter(errorCounter+1)
              }      
                  if (errorCounter>=2){
                     //Navigation code 
                    switchHandler();
                  }
    }


      
const clearPress = () =>{
      let tempCode = [...passcode]
      tempCode[buttonCounter-1] = '';
      console.log(tempCode)
      seButtonCounter(buttonCounter-1)
      setPasscode(tempCode);
    };
    
    let nopad = [
      {id:1},
      {id:2},
      {id:3},
      {id:4},
      {id:5},
      {id:6},
      {id:7},
      {id:8},
      {id:9},
      {id:0}
    ]; 
    return(
        <View >
          <View >
                       <Text style={styles.title1}>Enter Your PIN Code</Text>
           </View>
        <View style={styles.boxcontaner} >
        {passcode.map(p =>{
          return  <View style={p !=''? styles.box2:styles.box1}></View>
        })}       
        </View>
            <View style={styles.noBox}>
            {nopad.map(num =>{
              return(
                        <TouchableOpacity style={styles.box}
                           key={num.id}
                           onPress={()=>presControl(num.id)} >
                            <Text style={styles.title}>{num.id}</Text>
                        </TouchableOpacity>        
              );      
              
            })} 
            </View>
            <TouchableOpacity onPress={clearPress} style={styles.deleter} >
                        <Text style={styles.title}> x
                        </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
 
  title: {
   fontSize:40,
   justifyContent:'center',
   marginTop:5,

   
  },
    box1: {
    width:13,
    height:13,
    borderRadius:13,
    borderWidth:1,
    borderColor:'gray'
  },
  box2: {
    width:13,
    height:13,
    borderRadius:13,
    borderWidth:1,
    borderColor:'gray',
    backgroundColor:'red'
  },
  box: {
    width:70,
    height:70,
    borderRadius:70,
    borderWidth:1,
    borderColor:'green',
    alignItems:'center',
    backgroundColor:'#F2F3F4',
    justifyContent:'center',

  },

  boxcontaner:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:40,
    marginRight:40,
    marginTop:10,
  },

  noBox:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
    flexDirection:'row',
    flexWrap:'wrap',
    marginLeft:20,
    width:270,
    height:200,
  },

  deleter:{
    width:70,
    height:70,
    borderRadius:70,
    borderWidth:1,
    borderColor:'green',
    alignItems:'center',
    backgroundColor:'#F2F3F4',
    marginLeft:190,
    marginTop:10
  },
  title1:{
          marginLeft:40,
   fontSize:30,
   marginTop:30,
   fontFamily:'roboto',
   color:'gray',
  }

});

export default Buttons;