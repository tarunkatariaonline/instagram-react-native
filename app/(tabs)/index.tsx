import { Image, StyleSheet, Platform, ScrollView, View } from 'react-native';
import { FlatList } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Story from '@/components/Home/Story';
import StoryContainer from '@/components/Home/StoryContainer';
import Header from '@/components/Home/Header';
import { Ionicons } from '@expo/vector-icons';
import {imageUrls, videoUrl} from '../../utils'
import Post from '@/components/Home/Post';
import { PostInterface } from '@/interfaces';


export default function HomeScreen() {

  const DATA:PostInterface[] = [
    {
      id: 1,
      desc: "Hello, how are you?",
      userId: "lerklrj",
      postType: "image",
      images: [
        {
          id: 1,
          uri: imageUrls[3]
        }
      ],
      likes: [
        {
          id: 1,
          userId: "34kj43k5j3"
        }
      ],
      videoUri: {
        id: 323,
        uri: "kjfksajf"
      },
      comments: [
        {
          id: 1,
          userId: "34kj43k5j3",
          comment: "Hello, how are you?",
          reply: [
            {
              id: 1,
              userId: "34kj43k5j3",
              comment: "Hello, how are you?"
            }
          ]
        }
      ],
      uploadedAt: "5 days ago"
    },
    {
      id: 2,
      desc: "Just had a great workout!",
      userId: "user123",
      postType: "reel",
      images:null,
      likes: [
        {
          id: 2,
          userId: "user456"
        }
      ],
      videoUri: {
        id:1,
        uri: videoUrl
      },
      comments: [
        {
          id: 2,
          userId: "user456",
          comment: "Great job!",
          reply: []
        }
      ],
      uploadedAt: "2 days ago"
    },
    {
      id: 3,
      desc: "Exploring the city today!",
      userId: "traveler789",
      postType: "image",
      images: [
        {
          id: 3,
          uri: imageUrls[2]
        }
      ],
      likes: [
        {
          id: 3,
          userId: "user789"
        }
      ],
      videoUri: null,
      comments: [
        {
          id: 3,
          userId: "user789",
          comment: "Looks amazing!",
          reply: []
        }
      ],
      uploadedAt: "1 day ago"
    },
    {
      id: 4,
      desc: "Can't wait for the weekend!",
      userId: "weekendwarrior",
      postType: "image",
      images: [
        {
          id: 4,
          uri: imageUrls[0]
        }
      ],
      likes: [
        {
          id: 4,
          userId: "user101"
        }
      ],
      videoUri: null,
      comments: [],
      uploadedAt: "6 hours ago"
    },
    {
      id: 5,
      desc: "New recipe tried today.",
      userId: "chefmaster",
      postType: "image",
      images: null,
      likes: [
        {
          id: 5,
          userId: "user202"
        }
      ],
      videoUri: {
        id:4,
        uri:videoUrl
      },
      comments: [
        {
          id: 4,
          userId: "user202",
          comment: "Looks delicious!",
          reply: []
        }
      ],
      uploadedAt: "3 days ago"
    },
    {
      id: 6,
      desc: "Summer vacation vibes.",
      userId: "beachlover",
      postType: "image",
      images: [
        {
          id: 6,
          uri: imageUrls[0]
        }
      ],
      likes: [
        {
          id: 6,
          userId: "user303"
        }
      ],
      videoUri: null,
      comments: [],
      uploadedAt: "4 days ago"
    },
    {
      id: 7,
      desc: "Just finished a great book!",
      userId: "bookworm",
      postType: "image",
      images: [
        {
          id: 7,
          uri: imageUrls[2]
        }
      ],
      likes: [
        {
          id: 7,
          userId: "user404"
        }
      ],
      videoUri: null,
      comments: [
        {
          id: 5,
          userId: "user404",
          comment: "Which book was it?",
          reply: [
            {
              id: 2,
              userId: "bookworm",
              comment: "It was 'The Great Gatsby'."
            }
          ]
        }
      ],
      uploadedAt: "7 hours ago"
    },
    {
      id: 8,
      desc: "Amazing sunset today.",
      userId: "naturefan",
      postType: "image",
      images: [
        {
          id: 8,
          uri: imageUrls[0]
        }
      ],
      likes: [
        {
          id: 8,
          userId: "user505"
        }
      ],
      videoUri: null,
      comments: [],
      uploadedAt: "2 hours ago"
    },
    {
      id: 9,
      desc: "Trying out a new game.",
      userId: "gamer42",
      postType: "image",
      images: [
        {
          id: 9,
          uri: imageUrls[0]
        }
      ],
      likes: [
        {
          id: 9,
          userId: "user606"
        }
      ],
      videoUri: null,
      comments: [
        {
          id: 6,
          userId: "user606",
          comment: "How is it?",
          reply: [
            {
              id: 3,
              userId: "gamer42",
              comment: "It's really fun!"
            }
          ]
        }
      ],
      uploadedAt: "1 day ago"
    },
    {
      id: 10,
      desc: "Learning to play the guitar.",
      userId: "musician",
      postType: "image",
      images: [
        {
          id: 10,
          uri: imageUrls[0]
        }
      ],
      likes: [
        {
          id: 10,
          userId: "user707"
        }
      ],
      videoUri: null,
      comments: [
        {
          id: 7,
          userId: "user707",
          comment: "Awesome! Keep it up.",
          reply: []
        }
      ],
      uploadedAt: "12 hours ago"
    },
    {
      id: 11,
      desc: "Decorated my room!",
      userId: "interiorista",
      postType: "image",
      images: [
        {
          id: 11,
          uri: imageUrls[0]
        }
      ],
      likes: [
        {
          id: 11,
          userId: "user808"
        }
      ],
      videoUri: null,
      comments: [
        {
          id: 8,
          userId: "user808",
          comment: "Looks fantastic!",
          reply: []
        }
      ],
      uploadedAt: "8 hours ago"
    },
    {
      id: 12,
      desc: "Trying out a new recipe.",
      userId: "foodie",
      postType: "image",
      images: [
        {
          id: 12,
          uri: imageUrls[1]
        }
      ],
      likes: [
        {
          id: 12,
          userId: "user909"
        }
      ],
      videoUri: null,
      comments: [
        {
          id: 9,
          userId: "user909",
          comment: "Yum! What’s the recipe?",
          reply: [
            {
              id: 4,
              userId: "foodie",
              comment: "It's a new pasta dish."
            }
          ]
        }
      ],
      uploadedAt: "9 hours ago"
    },
    {
      id: 13,
      desc: "Weekend getaway!",
      userId: "traveljunkie",
      postType: "image",
      images: [
        {
          id: 13,
          uri: imageUrls[2]
        }
      ],
      likes: [
        {
          id: 13,
          userId: "user010"
        }
      ],
      videoUri: null,
      comments: [],
      uploadedAt: "3 hours ago"
    }
  ];
  
  return (
  <>

  <ScrollView style={{marginTop:40,paddingLeft:5,paddingRight:5}}>
 
  <Header/>
<StoryContainer/>


{/* <FlatList
        data={DATA}
        onScroll={(e)=>{
          let reelValue:any = e.nativeEvent.contentOffset.y.toFixed()
          // console.log((reelValue/665).toFixed())
        }}
        renderItem={({item,index}) => <Post  postData={item} index={index} />}
        keyExtractor={item => item.id as any}
      /> */}

<Post  postData={DATA[0]} index={1} />





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
