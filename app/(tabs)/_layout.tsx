import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
        
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

<Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />

<Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'add-sharp' : 'add-circle-outline'} color={color} />
          ),
        }}
      />

<Tabs.Screen
        name="reels"
        options={{
          title: 'reels',
          
          tabBarIcon: ({ color, focused }) => (
          focused? <Image
          style={{height:20,width:20}}
          source={{
            uri: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-reels-white-icon.png'
          }}
        />:<Image
        style={{height:20,width:20,opacity:0.4}}
        source={{
          uri: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-reels-white-icon.png'
        }}
      />
          ),
        }}
      />
     

     <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          
          tabBarIcon: ({ color, focused }) => (
          focused? <Image
          style={{height:26,width:26,borderRadius:100,borderWidth:1,borderColor:color}}
          source={{
            uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/450314095_1157002175423270_5398731110245667859_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=toKTUhTnOTIQ7kNvgGEvoCN&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQwNzM3MTM0NTc3NDc1NjQ1OQ%3D%3D.2-ccb7-5&oh=00_AYBKAzdkI3GxGjjmTdkaOjStjeUTWa00SBI5EQduMhV8QQ&oe=66A8358D&_nc_sid=10d13b'
          }}
        />:<Image
        style={{height:26,width:26,borderRadius:100}}
        source={{
          uri: 'https://scontent.cdninstagram.com/v/t51.29350-15/450314095_1157002175423270_5398731110245667859_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=toKTUhTnOTIQ7kNvgGEvoCN&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzQwNzM3MTM0NTc3NDc1NjQ1OQ%3D%3D.2-ccb7-5&oh=00_AYBKAzdkI3GxGjjmTdkaOjStjeUTWa00SBI5EQduMhV8QQ&oe=66A8358D&_nc_sid=10d13b'
        }}
      />
          ),
        }}
      />
     
    </Tabs>
  );
}
