import * as React from 'react';
import { Image } from 'react-native';
import { Text, View } from './Themed';
import { EvilIcons, Entypo, Octicons  } from '@expo/vector-icons';
import { TouchableHighlight, } from 'react-native-gesture-handler';
import styles from '../screens/styles';

const renderTweet = (item: any, navigation: any) => {
    return <TouchableHighlight key={item.id} underlayColor="#657786" onPress={() => navigation.navigate('TweetRoot', {screen:'Tweet', params: {id: item.id}})}>
        <View style={styles.tweetView}>
            <View style={styles.profilePicContainer}>
                <Image
                    style={styles.profilePic}
                    source={{ uri: item.profilepic }} />
            </View>
            <View style={styles.tweetContainer}>
                <View style={styles.tweetHeader}>
                    <View style={styles.tweetNameUsername}>
                        <Text style={styles.tweetName}>{item.name}</Text>
                        <Text style={{ color: 'grey' }}>{item.username}</Text>
                        <Octicons style={{paddingTop: 6, marginHorizontal: 4}} name="primitive-dot" size={4} color="#657786" />
                        <Text style={{color: '#657786'}}>{item.time}</Text>
                    </View>
                    <Entypo name="dots-three-vertical" size={12} color="black" />
                </View>
                <View style={{ backgroundColor: 'transparent' }}>
                    <Text style={styles.tweetText}>{item.tweetText}</Text>
                    {!!item.photo && <Image style={styles.tweetImage} source={{ uri: `${item.photo}` }} />}
                </View>

                <View style={styles.tweetFooterButtons}>
                    <EvilIcons name="comment" size={24} color="#657786" />
                    <EvilIcons name="retweet" size={24} color="#657786" />
                    <EvilIcons name="heart" size={24} color="#657786" />
                    <EvilIcons name="share-google" size={24} color="#657786" />
                </View>
            </View>
        </View>
    </TouchableHighlight>
}

export default renderTweet;