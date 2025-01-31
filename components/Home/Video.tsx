import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {videoUrl} from '../../utils'
import { ThemedView } from '../ThemedView';

interface AutoPlayVideo {
  index:number,
  selectedIndex:number
}
const AutoPlayVideo = ({index,selectedIndex}:AutoPlayVideo) => {
    const [mute,setMute] = useState(false)
  const video = useRef<Video>(null);
  const [status, setStatus] = useState({});



  return (
 <>

<ThemedView style={{position:"relative",height:450}}>
<TouchableOpacity onPress={()=>setMute(!mute)} style={{position:"absolute",bottom:12,right:20,zIndex:30,}}>
      <Ionicons style={{backgroundColor:"#4f4e4e",borderRadius:100 , padding:3}} name={(mute)?'volume-mute-outline':"volume-low-outline"} size={23} color={"white"} />
      </TouchableOpacity>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoUrl,
        }}
        // useNativeControls
        resizeMode={"cover" as any}
        isLooping
        isMuted={((index!=selectedIndex)||(mute==true))?true:false}
        shouldPlay={(selectedIndex==index)?true:false}
        
        // onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      </ThemedView>
  </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 450,
  },
});

export default AutoPlayVideo;
