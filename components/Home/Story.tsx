import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'

import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '../ThemedText';

interface StoryProps{
  id:string,
  title:string,
  uri:string
}

export const Story = ({id,title,uri}:StoryProps) => {
  return (
  
   

   <TouchableOpacity activeOpacity={0.8}  style={{justifyContent:"center",alignItems:"center",width:75,margin:10}} >
    <LinearGradient
        // Button Linear Gradient
        colors={['#ee2a7b', '#f9ce34','#ee2a7b', '#6228d7']}
        style={{width:85,height:85,borderRadius:100,justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10}}>
            <ThemedView  style={{width:78,height:78,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
         <Image
        style={{width:73,height:73,borderRadius:100}}
        source={{
          uri: uri,
        }}
      /></ThemedView>
     
      </LinearGradient>
      <ThemedText style={{fontSize:12}}>{title}</ThemedText>
      </TouchableOpacity>

      

  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
  });
export default Story

