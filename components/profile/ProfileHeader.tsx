import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { Ionicons } from '@expo/vector-icons'

const ProfileHeader = () => {
  return (
    <View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:15,paddingVertical:10}}>
      <ThemedText style={{fontSize:20,fontWeight:"600"}}>tarunkatariaonline</ThemedText>
      <View style={{flexDirection:"row"}}>
      <Ionicons name='add-circle-outline' style={{paddingHorizontal:10}} color={"white"} size={30}/>
        <Ionicons name='reorder-four-outline'  style={{paddingHorizontal:10}}  color={"white"} size={30}/>
       
        
      </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})