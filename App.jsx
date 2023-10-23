import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Home from './src/Screens/Main/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Broadcast from './src/Screens/Broadcast';
import Wallet from './src/Screens/Wallet';
import Notifications from './src/Screens/Notifications';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Classic from './src/Screens/Main/Classic';
import Join from './src/Screens/Main/Join';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#181F2A',
            position: 'absolute',
            alignItems: 'center',
            height: heightPercentageToDP(7),
            bottom: heightPercentageToDP(2),
            width: widthPercentageToDP(90),
            alignSelf: 'center',
            left: heightPercentageToDP(2.5),
            borderRadius: heightPercentageToDP(2.5),
            zIndex: 3,
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#225B44',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/1946/1946488.png',
                }}
                style={{
                  height: widthPercentageToDP(5),
                  width: widthPercentageToDP(5),
                  tintColor: color,
                }}
              />
            ),
            headerBackVisible: false,
            headerTitleStyle: {color: 'red', fontSize: heightPercentageToDP(2)},
            headerShadowVisible: false,
            headerShown: true,
            headerStyle: {backgroundColor: '#111829'},
            headerTitle: 'ELIMINATION GAMERZ',

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: '#37d089',
                  padding: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: heightPercentageToDP(1),
                  marginRight: heightPercentageToDP(0.2),
                  marginLeft: heightPercentageToDP(1),
                }}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/7630/7630204.png',
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
                <Text
                  style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
                  25.00
                </Text>
                <Text
                  style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
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
          }}
        />
        <Tab.Screen
          name="Broadcast"
          component={Broadcast}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2330/2330100.png',
                }}
                style={{
                  height: widthPercentageToDP(5),
                  width: widthPercentageToDP(5),
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/879/879762.png',
                }}
                style={{
                  height: widthPercentageToDP(5),
                  width: widthPercentageToDP(5),
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2529/2529521.png',
                }}
                style={{
                  height: widthPercentageToDP(5),
                  width: widthPercentageToDP(5),
                  tintColor: color,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <View
        style={{
          backgroundColor: '#111829', // Adjust the styles as needed
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: heightPercentageToDP(11), // Adjust the height as needed
        }}>
        {/* Your content for the absolute-positioned view */}
      </View>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Classic"
          component={Classic}
          options={{
            headerBackVisible: false,
            headerTitleStyle: {
              color: 'white',
              fontSize: heightPercentageToDP(2.9),
              fontWeight: '900',
            },
            headerShadowVisible: false,
            headerShown: true,
            headerStyle: {backgroundColor: '#111829'},
            headerTitle: 'CLASSIC',

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
                <Text
                  style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
                  25.00
                </Text>
                <Text
                  style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
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
          }}
        />
        <Stack.Screen
          name="Join"
          component={Join}
          options={{
            headerBackVisible: false,
            headerTitleStyle: {
              color: 'white',
              fontSize: heightPercentageToDP(2.9),
              fontWeight: '900',
            },
            headerShadowVisible: false,
            headerShown: true,
            headerStyle: {backgroundColor: '#111829'},
            headerTitle: 'JOIN',

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
                <Text
                  style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
                  25.00
                </Text>
                <Text
                  style={{color: 'white', fontSize: heightPercentageToDP(1.8)}}>
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
