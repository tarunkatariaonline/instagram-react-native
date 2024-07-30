import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import Reelvideo from '@/components/Reels/Reelvideo'
import Reelscontainer from '@/components/Reels/Reelscontainer'
import { ThemedView } from '@/components/ThemedView'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
const reels = () => {
  const [selectedIndex,setSelectedIndex] = useState<number>(-1)
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
  const navigation = useNavigation();

  
  useEffect(() => {
    const subscribe = navigation.addListener("focus",()=>{
setSelectedIndex(0)
    })
    const unsubscribe = navigation.addListener('blur', (e) => {
      // console.log('Tab icon tapped');
      setSelectedIndex(-1)
   
      // Add your logic here
    });

    return ()=>{
      unsubscribe()
      subscribe()
    };
  }, [navigation]);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3dfsdfa1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3dfsdfasdfa1-471f-bd96-145571e2fsd9d72',
      title: 'Third Item',
    },
    {
      id: '58694a0fsdff-3dfsdfa1-471f-bd96-14fsdf5571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0fsdff-3dfsdfa1-471f-bd96-14557fsdf1e29d72',
      title: 'Third Item',
    }
    ,  {
      id: '58694a0fsdff-3dfsdfsffa1-471f-bd96-145571e29d72',
      title: 'Third Item',
    }
    ,  {
      id: '58694a0fsdff-3dfsdfasffa1-471f-bd96-145571e29d72',
      title: 'Third Item',
    }
  ];
  return (
    <ThemedView style={{flex:1}} >
      
     
     <FlatList  onScroll={(e)=>{
 
      let scrollValue = e.nativeEvent.contentOffset.y
      let selectedIndexValue = ((scrollValue)/(Dimensions.get("window").height)).toFixed();
     setSelectedIndex(selectedIndexValue as any)

     }}
        //  initialNumToRender={4}
     pagingEnabled={false} // Disable pagingEnabled

     snapToInterval={windowHeight} // Manually set snap interval
     initialNumToRender={2}
     
     decelerationRate="fast" // Faster deceleration to enhance snap effect
     showsVerticalScrollIndicator={false}
        data={DATA}
       
        renderItem={({item,index}) => <View style={{height:windowHeight,width:windowWidth,justifyContent:"center"}}>
      
          <Reelvideo index={index} selectedIndex={selectedIndex} /></View>}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  )
}

export default reels

const styles = StyleSheet.create({})