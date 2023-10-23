import {
  Image,
  Pressable,
  ScrollView,
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

const Join = ({navigation}) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View
          style={{
            height: heightPercentageToDP(80),
            backgroundColor: '#13182A',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: heightPercentageToDP(1.5),
              paddingHorizontal: heightPercentageToDP(2),
              paddingVertical: heightPercentageToDP(2),
            }}>
            <Text
              style={{
                fontSize: heightPercentageToDP(1.8),
                fontWeight: '400',
                color: 'white',
              }}>
              All Teams
            </Text>
            <Text
              style={{
                fontSize: heightPercentageToDP(1.8),
                fontWeight: '400',
                color: 'white',
              }}>
              Prize Pool
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              borderWidth: 0.5,
              borderColor: 'white',
              width: widthPercentageToDP(95),
              left: heightPercentageToDP(1),
              padding: 7,
              borderRadius: 8,
              justifyContent: 'space-between',
            }}>
            <View style={{gap: 8, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', fontWeight: '700'}}>#0 </Text>
              <Image
                style={{
                  width: widthPercentageToDP(10),
                  height: widthPercentageToDP(10),
                  resizeMode: 'contain',
                }}
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: heightPercentageToDP(1.7),
                  textAlign: 'left',
                }}>
                Red Zone (my team)
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'green',
                  fontWeight: '700',
                  fontSize: heightPercentageToDP(1.8),
                  textAlign: 'right',
                }}>
                0
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '400',
                  fontSize: heightPercentageToDP(1.3),
                  textAlign: 'center',
                }}>
                points
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
