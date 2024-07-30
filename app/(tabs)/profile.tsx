import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profiletop from '@/components/profile/Profiletop'
import Highlights from '@/components/profile/Highlights'
import { ScrollView } from 'react-native'
import ProfilePosts from '@/components/profile/ProfilePosts'
import ProfileHeader from '@/components/profile/ProfileHeader'
import Modal from '@/components/Modal'
const profile = () => {
  return (
    
    <ScrollView style={{minHeight:0,marginTop:40}} >
      <ProfileHeader/>
    <Profiletop/>
    <Highlights/>
    <ProfilePosts/>
    {/* <Modal/> */}
   
    </ScrollView>
  )
}

export default profile

const styles = StyleSheet.create({})