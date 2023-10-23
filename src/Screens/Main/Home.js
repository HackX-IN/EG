import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Classic')}>
          <Text style={{fontSize: hp(2.9), fontWeight: '800'}}> Classic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: hp(2.9), fontWeight: '800'}}>TDM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <Text style={{fontSize: hp(2.3), fontWeight: '200', color: '#fff'}}>
          Hey Sumit , Select your
        </Text>
        <Text
          style={{
            fontSize: hp(3.5),
            fontWeight: '500',
            color: 'white',
            marginLeft: 5,
          }}>
          Favourite{' '}
          <Text style={{color: 'green', fontSize: hp(3.5)}}>Game</Text>
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 25,
    backgroundColor: '#fff',
    width: wp(45),
    marginBottom: hp(3),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
  top: {
    width: wp(100),
    height: hp(10),
    padding: 5,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    top: hp(0),
    paddingHorizontal: hp(1.7),
  },
});
