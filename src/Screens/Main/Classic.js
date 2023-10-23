import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import DataCard from '../../Components/DataCard';

const Data = [
  {
    image: 'https://example.com/image1.jpg',
    icon: 'https://example.com/icon1.png',
    title: 'Item 1',
    date: '2023-10-21',
    subtitle: 'Description for Item 1',
    button: 'Click Me',
    trophy: 'Gold Trophy',
  },
  {
    image: 'https://example.com/image2.jpg',
    icon: 'https://example.com/icon2.png',
    title: 'Item 2',
    date: '2023-10-22',
    subtitle: 'Description for Item 2',
    button: 'Press This',
    trophy: 'Silver Trophy',
  },
  {
    image: 'https://example.com/image3.jpg',
    icon: 'https://example.com/icon3.png',
    title: 'Item 3',
    date: '2023-10-23',
    subtitle: 'Description for Item 3',
    button: 'Tap Now',
    trophy: 'Bronze Trophy',
  },
  {
    image: 'https://example.com/image4.jpg',
    icon: 'https://example.com/icon4.png',
    title: 'Item 4',
    date: '2023-10-24',
    subtitle: 'Description for Item 4',
    button: 'Explore',
    trophy: 'Platinum Trophy',
  },
  {
    image: 'https://example.com/image5.jpg',
    icon: 'https://example.com/icon5.png',
    title: 'Item 5',
    date: '2023-10-25',
    subtitle: 'Description for Item 5',
    button: 'Learn More',
    trophy: 'Diamond Trophy',
  },
  {
    image: 'https://example.com/image6.jpg',
    icon: 'https://example.com/icon6.png',
    title: 'Item 6',
    date: '2023-10-26',
    subtitle: 'Description for Item 6',
    button: 'Download Now',
    trophy: 'Ruby Trophy',
  },
  {
    image: 'https://example.com/image7.jpg',
    icon: 'https://example.com/icon7.png',
    title: 'Item 7',
    date: '2023-10-27',
    subtitle: 'Description for Item 7',
    button: 'Get Started',
    trophy: 'Emerald Trophy',
  },
  {
    image: 'https://example.com/image8.jpg',
    icon: 'https://example.com/icon8.png',
    title: 'Item 8',
    date: '2023-10-28',
    subtitle: 'Description for Item 8',
    button: 'Sign Up',
    trophy: 'Sapphire Trophy',
  },
];

const Classic = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#37d089',
            padding: 3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: heightPercentageToDP(0.5),
            marginRight: heightPercentageToDP(1.5),
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2722/2722991.png',
            }}
            style={{
              width: widthPercentageToDP(5),
              height: widthPercentageToDP(5),
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: heightPercentageToDP(1.2),
            marginRight: heightPercentageToDP(1),
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10692/10692946.png',
            }}
            style={{
              height: widthPercentageToDP(5),
              width: widthPercentageToDP(5),
              resizeMode: 'contain',
            }}
          />
          <Text style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
            25.00
          </Text>
          <Text style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
            $ 0.00
          </Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/879/879762.png',
            }}
            style={{
              height: widthPercentageToDP(5),
              width: widthPercentageToDP(5),
              resizeMode: 'contain',
              tintColor: 'green',
            }}
          />
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: heightPercentageToDP(1.5),
            marginBottom: heightPercentageToDP(1.5),
          }}>
          <Text
            style={{
              fontSize: heightPercentageToDP(1.6),
              color: '#E3BDA6',
              fontWeight: '600',
              marginRight: heightPercentageToDP(1),
            }}>
            ☐ BATTLE ROYALE
          </Text>
          <Text
            style={{
              fontSize: heightPercentageToDP(1.6),
              color: '#51AB95',
              fontWeight: '600',
            }}>
            ☐ BRACKET
          </Text>
        </View>
      </View>
      <FlatList
        data={Data}
        numColumns={2}
        renderItem={({item, index}) => (
          <DataCard
            item={item}
            index={index}
            key={index}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: heightPercentageToDP(3),
        }}
      />
    </View>
  );
};

export default Classic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    paddingHorizontal: heightPercentageToDP(3),
    paddingVertical: heightPercentageToDP(2),
  },
});
