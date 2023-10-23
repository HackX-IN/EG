import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const DataCard = ({item, index, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.buttonCard}
      onPress={() => navigation.navigate('Join')}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{
            width: widthPercentageToDP(90),
            height: widthPercentageToDP(35),
            resizeMode: 'stretch',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            width: widthPercentageToDP(90),
            paddingHorizontal: heightPercentageToDP(1.3),
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: heightPercentageToDP(0.2),
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: heightPercentageToDP(1.7),
                fontWeight: '900',
              }}>
              00/00/0000 <Text>00.00 PM</Text>
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: heightPercentageToDP(1.7),
                fontWeight: '900',
                textAlign: 'center',
              }}>
              TEAM - 14 / 25
            </Text>

            <Text
              style={{
                fontSize: heightPercentageToDP(1.5),
                backgroundColor: '#B15F5D',
                fontWeight: '900',
                color: '#fff',
                textAlign: 'center',
                padding: 3,
                width: widthPercentageToDP(20),
                borderRadius: 4,
              }}>
              SQUAD
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: heightPercentageToDP(0.8),
            }}>
            <Text
              style={{
                fontSize: heightPercentageToDP(1.9),
                color: 'black',
                fontWeight: '600',
                marginBottom: heightPercentageToDP(1),
              }}>
              🏆 Prize:🪙{' '}
              <Text style={{color: '#B15F5D', fontWeight: 'bold'}}>200</Text>{' '}
              Coins
            </Text>
            <Pressable
              style={{
                padding: 6,
                backgroundColor: '#B15F5D',
                borderRadius: 5,
                paddingHorizontal: 8,
                width: widthPercentageToDP(22),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: heightPercentageToDP(1.4),
                  fontWeight: '900',
                  color: '#fff',
                }}>
                JOIN - <Text style={{color: 'yellow'}}>FREE</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DataCard;

const styles = StyleSheet.create({
  buttonCard: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(26),
    backgroundColor: '#FCEFE5',

    marginBottom: heightPercentageToDP(3),
    marginRight: heightPercentageToDP(3),
  },
  card: {
    width: widthPercentageToDP(100),
  },
});
