import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Highlights from './Highlights'
const Profiletop = () => {
  return (
    <View style={{paddingTop:15,padding:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>

        <View>
      <Image
        style={{height:80,width:80,borderRadius:100}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
     
      </View>
      <View style={{alignItems:"center",justifyContent:"center"}}>
        <ThemedText style={{fontSize:19,fontWeight:"600"}}>5</ThemedText>
        <ThemedText style={{fontSize:17,fontWeight:"600"}}>Posts</ThemedText>
      </View>

      <View style={{alignItems:"center",justifyContent:"center"}}>
        <ThemedText style={{fontSize:19,fontWeight:"600"}}>120</ThemedText>
        <ThemedText style={{fontSize:17,fontWeight:"600"}}>Followers</ThemedText>
      </View>

      <View style={{alignItems:"center",justifyContent:"center"}}>
        <ThemedText style={{fontSize:19,fontWeight:"600"}}>200</ThemedText>
        <ThemedText style={{fontSize:17,fontWeight:"600"}}>Following</ThemedText>
      </View>
      
      </View>

      <ThemedText style={{fontWeight:"500"}}>Tarun Kataria</ThemedText>
      <ThemedText style={{color:"#58c3fc",fontSize:14,fontWeight:"300"}}>Web Designer</ThemedText>
      <ThemedText>hackathon develoer cake</ThemedText>

      <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:20}}>
        <TouchableOpacity style={{width:"48%",height:33,backgroundColor:"rgba(168, 172, 173,0.2)",justifyContent:"center",alignItems:"center",borderRadius:7}}>
            <ThemedText style={{fontSize:15}}>Edit Profile</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={{width:"48%",height:33,backgroundColor:"rgba(168, 172, 173,0.2)",justifyContent:"center",alignItems:"center",borderRadius:7}}>
            <ThemedText style={{fontSize:15}}>Share Profile</ThemedText>
        </TouchableOpacity>
      </View>
      
   
    </View>
  )
}

export default Profiletop

const styles = StyleSheet.create({})