import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native';
import Searchbar from '@/components/search/Searchbar';
import { Image } from 'react-native';
import { imageUrls } from '@/utils';
import Modal from '@/components/Modal';
const colorsArray = [
  { id: 1, color: 'red' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'green' },
  { id: 4, color: 'yellow' },
  { id: 5, color: 'purple' },
  { id: 6, color: 'orange' },
  { id: 7, color: 'pink' },
  { id: 8, color: 'brown' },
  { id: 9, color: 'gray' },
  { id: 10, color: 'black' }
];

const search = () => {
  const [isModal,setIsModal] = useState<boolean>(false)
  return (
    <View style={{paddingTop:40,paddingLeft:10,paddingRight:10}} >
    <Searchbar/>

    <FlatList
        data={colorsArray}
        numColumns={3}
        renderItem={({item}) => <View style={{height:120,width:120,backgroundColor:"gray",margin:1}}>
          <TouchableOpacity onLongPress={()=>setIsModal(true)} onPressOut={()=>setIsModal(false)}>
             <Image
        style={{height:120,width:120}}
        source={{
          uri: imageUrls[0],
        }}
      />
      </TouchableOpacity>
        </View>}
        keyExtractor={item => item.id as any}
      />
 
 {isModal&&<Modal/>}
    </View>
  )
}

export default search

const styles = StyleSheet.create({})