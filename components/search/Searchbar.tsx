import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'

const Searchbar = () => {
  return (
    <View style={{height:70,justifyContent:"center",padding:5}}>
      <TouchableOpacity style={{height:40,backgroundColor:"rgba(192,193,194,0.2)",borderRadius:10,flexDirection:"row",alignItems:"center"}}>
       <Ionicons name='search' size={22} style={{margin:2,paddingHorizontal:5,marginRight:10}} color={"white"} />
       <TextInput
        style={{height:40,width:"100%",fontSize:16,color:"white"}}
        placeholder="Search"
        placeholderTextColor={"rgba(192,193,194,0.6)"}
        
      />
      </TouchableOpacity>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({})