import React,{Component} from "react";
import { StyleSheet, Text, View } from "react-native";


const Loding = () =>{
 
  return(
    <View style={styles.boxcontaner} >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
          
    </View>
  );

}

const styles = StyleSheet.create({
 

  box: {
    width:13,
    height:13,
    borderRadius:13,
    borderWidth:1,
    borderColor:'gray'
    
  },

  boxcontaner:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginRight: 100,
    marginTop:25,
    marginLeft:100,
    
  }

});

export default Loding;