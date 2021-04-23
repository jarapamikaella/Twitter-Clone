/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import search from '../screens/SearchScreen';
import notification from '../screens/NotificationScreen';
import messages from '../screens/MessageScreen';

import { BottomTabParamList, HomeTabParamList, SearchTabParamList, NotifParamList, MessageParamList, RootStackParamList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Notification"
        component={NotifTabNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="notifications-outline" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Message"
        component={MsgTabNavigator}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="mail-outline" color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={24} style={{ marginBottom: -10 }} {...props} />;
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeTabParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="homescreen"
        component={HomeScreen}
      // options={{ }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchTabParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="searchscreen"
        component={search}
        options={{ headerTitle: 'Search' }}
      />
    </SearchStack.Navigator>
  );
}

const NotifTabStack = createStackNavigator<NotifParamList>();

function NotifTabNavigator() {
  return (
    <NotifTabStack.Navigator>
      <NotifTabStack.Screen
        name="notification"
        component={notification}
        options={{ headerTitle: 'Notification' }}
      />
    </NotifTabStack.Navigator>
  );
}

const MessageTabStack = createStackNavigator<MessageParamList>();

function MsgTabNavigator() {
  return (
    <MessageTabStack.Navigator>
      <MessageTabStack.Screen
        name="message"
        component={messages}
        options={{ headerTitle: 'Messages' }}
      />
    </MessageTabStack.Navigator>
  );
}
