import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'

import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '../ThemedText';
import Story from './Story';
import { FlatList } from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/450314095_1157002175423270_5398731110245667859_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=toKTUhTnOTIQ7kNvgGKR2Mb&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQwNzM3MTM0NTc3NDc1NjQ1OQ%3D%3D.2-ccb7-5&oh=00_AYC3XsUbKh8JYvIicsA6XT1wcrPYphvLrR7N3qVxaU3kEA&oe=66A8358D&_nc_sid=10d13b',
      title: 'tarun',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abfdsfasb28ba',
        uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/431029517_910103700885609_9105084181740437594_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45ODl4OTg5LnNkci5mMjkzNTAifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=HH-hvlMV_8kQ7kNvgGtptrD&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxNDY5Nzk0MDExNDQ3MzUxMw%3D%3D.2-ccb7-5&oh=00_AYA9oPUon4vy6Aqr5AKDIv5I_3RC0SqzPDZtuXx9IyeP9A&oe=66A8455A&_nc_sid=10d13b',
        title: 'vishal',
      },
      {
        id: 'bd7acbea-c1b1-46c2-fsffdfsaaed5-3ad53abb28ba',
        uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/431377694_1519232228635377_941556383912587520_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=lp5d1qv19j0Q7kNvgGeFfdu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxODI3OTkyOTk2MjkwOTUyOQ%3D%3D.2-ccb7-5&oh=00_AYA0mp9Qn9ytSxtkgfEvJUqi4rhTRqFA4tF0ap9HHnJznQ&oe=66A8267E&_nc_sid=10d13b',
        title: 'hero',
      },
      {
        id: 'bd7acbea-c1b1-fdfsa46c2fsffas-aed5-3ad53abb28ba',
        uri: 'https://instagram.fjai2-3.fna.fbcdn.net/v/t51.29350-15/448344530_3467214166902047_1970451313056015555_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fjai2-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=eZeX64MnSdgQ7kNvgFUnRqq&edm=AIcyvokBAAAA&ccb=7-5&ig_cache_key=MzM5MTgyMjA3MDI1MjgwMTE4NQ%3D%3D.2-ccb7-5&oh=00_AYA1Mq9i3Ao_SCkThLAvTnO2Xq77SlDh71cXUTV11HPdBg&oe=66A826EF&_nc_sid=715119',
        title: 'rajeev',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-fsaf3ad53abb28ba',
        uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/450314095_1157002175423270_5398731110245667859_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=toKTUhTnOTIQ7kNvgGKR2Mb&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQwNzM3MTM0NTc3NDc1NjQ1OQ%3D%3D.2-ccb7-5&oh=00_AYC3XsUbKh8JYvIicsA6XT1wcrPYphvLrR7N3qVxaU3kEA&oe=66A8358D&_nc_sid=10d13b',
        title: 'Story 1',
      }
  ];
export const StoryContainer = () => {


  return (
   <ThemedView style={{height:130,justifyContent:"center"}}>
   

   <FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => <Story id={item.id} uri={item.uri} title={item.title}  />}
        keyExtractor={item=>item.id}
      />
      
   </ThemedView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
  });
export default StoryContainer

