import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Reelvideo from './Reelvideo'
import { FlatList } from 'react-native';
const PostDATA = [
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
    id: '58694a0f-3fsfda1-471f-bd96-145571e29d72',
    title: 'Thirfsafd Item',
  },
];

const Reelscontainer = () => {
  
  return (
   <>

 
   <FlatList
        data={PostDATA}
        renderItem={({item}) => <Reelvideo  />}
        keyExtractor={item => item.id}
      />

   </>
  )
}

export default Reelscontainer

const styles = StyleSheet.create({})