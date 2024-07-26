import { Image, StyleSheet, Platform, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Story from '@/components/Home/Story';
import StoryContainer from '@/components/Home/StoryContainer';
import Header from '@/components/Home/Header';
import { Ionicons } from '@expo/vector-icons';
import Post from '@/components/Home/Post';

export default function HomeScreen() {
  return (
  <>

  <ScrollView style={{marginTop:40,paddingLeft:5,paddingRight:5}}>
 
  <Header/>
<StoryContainer/>
<Post/>
<Post/>


</ScrollView>

  </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
