import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { ThemedText } from '../ThemedText'
const Highlights = () => {
  return (
    
    <View style={{alignItems:'center',justifyContent:"center",width:100}}>
       <Image
        style={{height:75,width:75,borderRadius:100,padding:10,borderWidth:4,borderColor:"rgba(135, 137, 138,0.5)"}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}

      />
      <ThemedText>hello</ThemedText>
 </View>
  )
}

export default Highlights

const styles = StyleSheet.create({})