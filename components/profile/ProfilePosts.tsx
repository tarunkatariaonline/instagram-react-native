import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from '../ThemedText'
import { Ionicons } from '@expo/vector-icons'
import ProfilePostandReels from './ProfilePostandReels'
import Modal from '../Modal'

const ProfilePosts = () => {
    const [selectedTab,setSelectedTab] = useState("posts")
    const [isModal,setIsModal] = useState(false)
  return (
    <>
    <View style={{padding:2,minHeight:Dimensions.get("window").height}}>


        <View style={{flexDirection:"row",justifyContent:"space-around"}}>

        <TouchableOpacity onPress={()=>{setSelectedTab("posts")}} style={{width:60,alignItems:"center",opacity:(selectedTab==="posts")?1:0.5,padding:5,borderBottomWidth:(selectedTab==="posts")?3:0,borderBottomColor:"white"}}>
      <Ionicons size={25} name='grid'  color={"white"}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{setSelectedTab("reels")}} style={{width:60,alignItems:"center",padding:5,borderBottomWidth:(selectedTab==="reels")?3:0,opacity:(selectedTab==="reels")?1:0.5,borderBottomColor:"white"}}>
      <Ionicons size={25} name='videocam'  color={"white"}/>
      </TouchableOpacity>

      </View>

<View style={{flexDirection:"row",flexWrap:"wrap"}}>
    
 
         <ProfilePostandReels />
    


</View>

      
 
    </View>
    {/* <Modal/> */}
    </>
  )
}

export default ProfilePosts

const styles = StyleSheet.create({})