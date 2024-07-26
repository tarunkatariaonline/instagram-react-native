import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const Post = () => {

    
  return (

    <>
    <ThemedView style={{height:560}}>
        <ThemedView  style={{height:60,justifyContent:'space-between',flexDirection:"row",alignItems:"center"}}>

        <TouchableOpacity activeOpacity={0.8}  style={{justifyContent:"center",alignItems:"center",flexDirection:"row",marginLeft:7}} >
    <LinearGradient
        // Button Linear Gradient
        colors={['#ee2a7b', '#f9ce34','#ee2a7b', '#6228d7']}
        style={{width:40,height:40,borderRadius:100,justifyContent:"center",alignItems:"center",marginRight:10}}>
            <ThemedView  style={{width:37,height:37,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
         <Image
        style={{width:35,height:35,borderRadius:100}}
        source={{
          uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/450314095_1157002175423270_5398731110245667859_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=toKTUhTnOTIQ7kNvgGKR2Mb&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQwNzM3MTM0NTc3NDc1NjQ1OQ%3D%3D.2-ccb7-5&oh=00_AYC3XsUbKh8JYvIicsA6XT1wcrPYphvLrR7N3qVxaU3kEA&oe=66A8358D&_nc_sid=10d13b',
        }}
      /></ThemedView>
       
      
      </LinearGradient>
        <ThemedText style={{fontSize:15}}>The Wire</ThemedText>
      </TouchableOpacity>
   
      <ThemedView style={{flexDirection:"row"}}>
      <Ionicons size={20} style={{paddingLeft:5,paddingRight:5}}  name='ellipsis-vertical' color={"white"}/>
      
      </ThemedView>
      </ThemedView>
      <Image
        style={{width:"auto",height:450}}
        source={{
          uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/450314095_1157002175423270_5398731110245667859_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=toKTUhTnOTIQ7kNvgGEvoCN&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQwNzM3MTM0NTc3NDc1NjQ1OQ%3D%3D.2-ccb7-5&oh=00_AYBKAzdkI3GxGjjmTdkaOjStjeUTWa00SBI5EQduMhV8QQ&oe=66A8358D&_nc_sid=10d13b',
        }}
      />

<ThemedView  style={{height:50,justifyContent:'space-between',flexDirection:"row",alignItems:"center"}}>
    <ThemedView style={{flexDirection:"row"}}>
      <Ionicons size={30} style={{paddingLeft:7,paddingRight:7}}  name='heart-outline' color={"white"}/>
      <Ionicons size={28} style={{paddingLeft:7,paddingRight:7}} name='chatbubble-outline' color={"white"}/>
      <Ionicons size={28} style={{paddingLeft:7,paddingRight:7}} name='paper-plane-outline' color={"white"}/>
      </ThemedView>
      <ThemedView style={{flexDirection:"row"}}>
      <Ionicons size={28} style={{paddingLeft:5,paddingRight:5}}  name='bookmark-outline' color={"white"}/>
      
      </ThemedView>
      </ThemedView>

      
    </ThemedView>
 
    </>
  )
}

export default Post

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });