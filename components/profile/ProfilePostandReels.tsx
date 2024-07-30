import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { Image } from 'react-native'
import { imageUrls } from '@/utils'
import { Ionicons } from '@expo/vector-icons'
import Modal from '../Modal'
const ProfilePostandReels = () => {
  return (
    <View style={{height:125,width:125,backgroundColor:"red",margin:2,position:"relative"}}>
       <Image
        style={{height:125,width:125}}
        source={{
          uri: imageUrls[3],
        }}
      />
      <Ionicons name="camera" size={20}  color={"white"} style={{position:"absolute",zIndex:30,right:10}}/>

    </View>
  )
}

export default ProfilePostandReels

const styles = StyleSheet.create({})