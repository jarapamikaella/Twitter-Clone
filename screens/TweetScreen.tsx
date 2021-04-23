import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tweets } from '../services/data';
import { StyleSheet } from 'react-native';
import { EvilIcons, Entypo, Octicons } from '@expo/vector-icons';
import styles from './styles';

export default function TweetScreen({ navigation, route }: any) {

    const idItem = route.params.id;

    const tweet = Tweets.find((tweetDetail) => tweetDetail.id === idItem);

    return (
        <View style={style.container}>
            <View>
                <View style={style.tweetHeader}>
                    <View style={{ paddingEnd: 12, }}>
                        <Image
                            style={styles.profilePic}
                            source={{ uri: tweet?.profilepic }} />
                    </View>
                    <View style={{ paddingVertical: 16,}}>
                        <Text style={{ paddingBottom: 4, fontSize: 16 }}>{tweet?.name}</Text>
                        <Text style={{ fontSize: 14, }}>{tweet?.username}</Text>
                    </View>
                        {/* <Entypo name="dots-three-vertical" size={12} color="black" /> */}
                </View>
                <View style={style.tweetContainer}>
                    <Text style={{ fontSize: 18, }}>{tweet?.tweetText}</Text>
                    {!!tweet?.photo && <Image style={style.tweetImage} source={{ uri: `${tweet.photo}` }} />}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 6, paddingHorizontal: 2, }}>
                        <Text>4:00 pm </Text>
                        <Octicons style={{ paddingTop: 6, marginHorizontal: 4 }} name="primitive-dot" size={4} color="#657786" />
                        <Text>22 April 2020</Text>
                        <Octicons style={{ paddingTop: 6, marginHorizontal: 4 }} name="primitive-dot" size={4} color="#657786" />
                        <Text>Twitter for Android</Text>
                    </View>
                </View>

                <View style={style.tweetDetailsFooter}>
                    <EvilIcons name="comment" size={24} color="#657786" />
                    <EvilIcons name="retweet" size={24} color="#657786" />
                    <EvilIcons name="heart" size={24} color="#657786" />
                    <EvilIcons name="share-google" size={24} color="#657786" />
                </View>
            </View>

        </View>
    );
}


const style = StyleSheet.create({
    container: {
        //backgroundColor: 'grey',
        flex: 1,
        paddingTop: 8,
        backgroundColor: 'white',
    },

    tweetHeader: {
        alignItems: 'center',
        //backgroundColor: 'blue',
        flexDirection: 'row',
        paddingHorizontal: 12,
    },

    tweetContainer: {
        paddingVertical: 8,
        marginHorizontal: 12,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3
        //backgroundColor: 'pink'
    },

    tweetText: {
        paddingHorizontal: 12,
    },

    tweetImage: {
        width: "100%",
        height: 200,
        borderRadius: 12,
        marginTop: 12,
    },

    tweetDetailsFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderBottomColor: '#AAB8C2',

    },

    separator: {
        height: 10,
        color: '#AAB8C2'
    },

});