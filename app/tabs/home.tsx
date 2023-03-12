import * as React from 'react';
import { StyleSheet, StatusBar, FlatList } from 'react-native';
import { Fleets } from '../../services/data';
import { View } from '../../components/Themed';
import { FontAwesome5, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Tweets } from '../../services/data';
import renderTweet from '../../components/Tweets';
import renderFleet from '../../components/Fleets';

export default function HomeScreen({navigation}: any) {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.header}>
          <TouchableOpacity>
            <SimpleLineIcons name="menu" size={24} color="#1DA1F2" />
          </TouchableOpacity>
          <FontAwesome5 name="twitter" size={24} color="#1DA1F2" />
          <TouchableOpacity>
            <MaterialCommunityIcons name='star-four-points-outline' size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        <View style={style.separator} lightColor="#AAB8C2" />

        {/* <View>
        <FlatList
          data={Fleets}
          renderItem={renderFleet}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        </View> */}

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {Fleets.map((fleetItem) => {
              return renderFleet(fleetItem, navigation);
            })}
          </View>
        </ScrollView>

        <View style={style.separator} lightColor="#AAB8C2" />

        <ScrollView>
          <View>
            {Tweets.map((tweetItem) => {
              return renderTweet(tweetItem, navigation);
            })}
          </View>
        </ScrollView>

        {/* <FlatList
          data={Tweets}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        /> */}

      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingTop: StatusBar.currentHeight,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    height: .3,
    color: '#AAB8C2'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
  },
});