import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {videoUrl} from '../../utils'
import { ThemedView } from '../ThemedView';
import { Text } from 'react-native';
import { Image } from 'react-native';

interface ReelVideoProps{
  index:number,
  selectedIndex:any
}
const Reelvideo = ({index,selectedIndex}:ReelVideoProps) => {


    const [mute,setMute] = useState(true)
  const video = useRef<Video>(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (video.current) {
      // video.current.playAsync();
    }
  }, []);

  return (
 <>

<ThemedView style={{position:"relative",height:Dimensions.get("window").height,justifyContent:"center"}}>

<View style={{position:"absolute",bottom:40,zIndex:30,right:0,width:"100%",flexDirection:"row",alignItems:"flex-end"}}>
  
      <View style={{width:"85%",padding:10}}>
       
       <View style={{flexDirection:"row",alignItems:"center"}}>
     
      <Image
        style={{height:40,width:40,borderRadius:100}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />  
      <Text style={{fontSize:17,fontWeight:"600",margin:4,color:"white"}}>Tarunkataria</Text>
      <TouchableOpacity   >
        <Text style={{padding:4,paddingLeft:10,paddingRight:10,fontSize:16,fontWeight:"500",borderRadius:6,borderWidth:1,borderColor:"white",color:"white",marginLeft:10}}>Follow</Text>
      </TouchableOpacity>
      
       </View >
       <Text style={{color:"white",fontWeight:"500",marginTop:10,marginBottom:10}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium consequatur necessitatibus numquam voluptatum! Nam cumque rerum, esse consequuntur similique natus aliquam debitis ab nulla velit id, numquam vitae asperiores?
     
        
       </Text>

     
        <TouchableOpacity style={{justifyContent:"center",alignItems:"flex-start",marginVertical:5,opacity:0.7}}>
        <Text style={{backgroundColor:"#4a4a4a",paddingHorizontal:13,paddingVertical:2,fontSize:13,borderRadius:10,color:"white"}}>_.edit - Original audio</Text>
        </TouchableOpacity>
      </View>

      <View style={{width:"15%",alignItems:"flex-end"}}>
<TouchableOpacity style={{alignItems:"center",marginBottom:10,paddingRight:10}} >
      <Ionicons style={{ padding:3}} name={"heart-outline"} size={35} color={"white"} />
      <Text style={{color:"white"}}>2,688</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:"center",marginBottom:10,paddingRight:10}} >
      <Ionicons style={{ padding:3}} name={"chatbubble-outline"} size={28} color={"white"} />
      <Text style={{color:"white"}}>2,688</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:"center",marginBottom:10,paddingRight:10}} >
      <Ionicons style={{ padding:3}} name={"paper-plane-outline"} size={28} color={"white"} />
      <Text style={{color:"white"}}>2,688</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:"center",marginBottom:20,paddingRight:10}} >
      <Ionicons style={{ padding:3}} name={"ellipsis-vertical"} size={23} color={"white"} />
     
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:"center",marginBottom:10,paddingRight:10}} >
      <Image
        style={{height:28,width:28,borderRadius:5,borderColor:"white",borderWidth:1}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
     
      </TouchableOpacity>
      </View>
      </View>
      <Video
        ref={video}
        
        style={styles.video}
        source={{
          uri: videoUrl,
        }}
        // useNativeControls
        resizeMode={"cover" as any}
        isLooping
        isMuted={false}
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
    height:"100%",
  },
});

export default Reelvideo;
