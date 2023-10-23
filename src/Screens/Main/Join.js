import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Join = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: widthPercentageToDP(100),
          height: widthPercentageToDP(30),
          resizeMode: 'contain',
          marginTop: heightPercentageToDP(1),
        }}
        source={{
          uri: 'https://www.freepnglogos.com/uploads/pubg-png/gamescom-pubg-invitational-liquipedia-playerunknown-11.png',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: heightPercentageToDP(1),
          paddingVertical: heightPercentageToDP(5),
        }}>
        <View style={{gap: 6}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: heightPercentageToDP(1.8),
            }}>
            3 Teams Signed Up
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: heightPercentageToDP(1.4),
            }}>
            Total 22 Teams
          </Text>
        </View>

        <View style={{gap: 6}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: heightPercentageToDP(1.4),
              textAlign: 'right',
            }}>
            Entry
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: heightPercentageToDP(1.69),
            }}>
            🟡 25
          </Text>
        </View>
      </View>
      <View
        style={{
          width: widthPercentageToDP(90),
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#fff',
          borderWidth: 0.2,
          left: heightPercentageToDP(2),
        }}
      />
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
          paddingHorizontal: heightPercentageToDP(1),
          paddingVertical: heightPercentageToDP(3),
          gap: heightPercentageToDP(6),
        }}>
        <View style={{gap: 6}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: heightPercentageToDP(1.8),
            }}>
            Start From
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: heightPercentageToDP(1.4),
            }}>
            15/10/2023 03:40 PM
          </Text>
        </View>

        <View style={{gap: 6}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: heightPercentageToDP(1.8),
            }}>
            End Time
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: heightPercentageToDP(1.4),
            }}>
            15/10/2023 03:40 PM
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: heightPercentageToDP(1),
          paddingVertical: heightPercentageToDP(3),
          backgroundColor: 'rgb(53,66,80)',
        }}>
        <View style={{gap: 6}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: heightPercentageToDP(1.8),
              textAlign: 'center',
            }}>
            TPP
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: heightPercentageToDP(1.4),
            }}>
            Format
          </Text>
        </View>

        <View style={{gap: 6}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: heightPercentageToDP(1.8),
            }}>
            SQUAD
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: heightPercentageToDP(1.4),
              textAlign: 'center',
            }}>
            Mode
          </Text>
        </View>
        <View style={{gap: 6}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: heightPercentageToDP(1.8),
            }}>
            ERANGEL
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: heightPercentageToDP(1.4),
              textAlign: 'center',
            }}>
            Map
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: heightPercentageToDP(1),
          paddingVertical: heightPercentageToDP(3),
        }}>
        <Text
          style={{
            fontSize: heightPercentageToDP(1.6),
            fontWeight: '400',
            color: 'white',
            lineHeight: 20,
            marginBottom: heightPercentageToDP(2),
          }}
          numberOfLines={2}>
          ✔️ Solo Duo Squad match For Pro player PUBG Mobile Arena PUBG Mobile
          Arena PUBG Mobile Arena
        </Text>
        <Text
          style={{
            fontSize: heightPercentageToDP(1.6),
            fontWeight: '400',
            color: 'white',
            lineHeight: 20,
            marginBottom: heightPercentageToDP(2),
          }}
          numberOfLines={2}>
          ✔️ Solo Duo Squad match For Pro player PUBG Mobile Arena PUBG Mobile
          Arena PUBG Mobile Arena
        </Text>
        <Text
          style={{
            fontSize: heightPercentageToDP(1.6),
            fontWeight: '400',
            color: 'white',
            lineHeight: 20,
            marginBottom: heightPercentageToDP(1.3),
          }}
          numberOfLines={2}>
          ✔️ Solo Duo Squad match For Pro player PUBG Mobile Arena PUBG Mobile
          Arena PUBG Mobile Arena
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: heightPercentageToDP(3),
            paddingHorizontal: heightPercentageToDP(2),
          }}>
          <Pressable
            style={{
              padding: heightPercentageToDP(1),
              backgroundColor: 'lightgreen',
              borderRadius: heightPercentageToDP(2),
              paddingHorizontal: heightPercentageToDP(2),
            }}>
            <Text
              style={{
                fontSize: heightPercentageToDP(1.2),
                fontWeight: '900',
                color: 'black',
              }}>
              My Team
            </Text>
          </Pressable>
          <Pressable
            style={{
              padding: heightPercentageToDP(1),

              borderRadius: heightPercentageToDP(2),
              paddingHorizontal: heightPercentageToDP(3),
              borderColor: 'green',
              borderWidth: 1,
            }}>
            <Text
              style={{
                fontSize: heightPercentageToDP(1.4),
                fontWeight: '600',
                color: 'white',
              }}>
              View More Rules
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Join;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202B3B',
  },
});
