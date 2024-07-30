import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'
import { imageUrls } from '@/utils'
import { Ionicons } from '@expo/vector-icons'

Image
const Modal = () => {
  return (
    <View style={{height:Dimensions.get("window").height,width:Dimensions.get("window").width,position:"absolute",justifyContent:"center",alignItems:"center",zIndex:100,backgroundColor:"rgba(0,0,0,0.8)",padding:10}}>
      <ThemedView style={{height:460,backgroundColor:"rgba(60, 60,60,1)",width:"100%",borderRadius:20,top:0}}>
     
     <View style={{height:60,flexDirection:"row",alignItems:"center",padding:10}}>
     <Image
        style={{height:40,width:40,borderRadius:100}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <ThemedText style={{fontSize:16,paddingHorizontal:15,fontWeight:"500"}}>tarunkatariaonline</ThemedText>
     </View>

     <Image
        style={{height:350,width:"100%"}}
        source={{
          uri: imageUrls[0],
        }}
      />
<ThemedView  style={{height:50,justifyContent:'space-between',flexDirection:"row",alignItems:"center"}}>
   
     <TouchableOpacity>
      <Ionicons size={30} style={{paddingLeft:7,paddingRight:7}}  name='heart-outline' color={"white"}/>
      </TouchableOpacity>
      <TouchableOpacity>

      <Ionicons size={28} style={{paddingLeft:7,paddingRight:7}} name='chatbubble-outline' color={"white"}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons size={28} style={{paddingLeft:7,paddingRight:7}} name='paper-plane-outline' color={"white"}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons size={26} style={{paddingLeft:7,paddingRight:7}} name='ellipsis-vertical' color={"white"}/>
      </TouchableOpacity>
    
      </ThemedView>
      </ThemedView>
    
    </View>
  )
}

export default Modal

const styles = StyleSheet.create({})