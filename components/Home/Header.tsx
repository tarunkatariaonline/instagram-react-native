import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { Image } from 'react-native'
import { ThemedText } from '../ThemedText'
const Header = () => {
  return (
    <ThemedView style={{paddingTop:10,paddingBottom:10,height:50,justifyContent:"center"}} >
          <ThemedText style={{fontSize:25}}>Instagram</ThemedText>


    </ThemedView>
  )
}

export default Header

const styles = StyleSheet.create({})