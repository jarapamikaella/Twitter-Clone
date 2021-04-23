export interface fleet {
    id: number;
    name: string;
    photo: string;
}

export interface tweet {
    id: number;
    profilepic: string;
    name: string;
    username: string;
    time?: string;
    tweetText: string;
    photo?: string;
}

export const Fleets = [
    {
        id: 55,
        name: 'Add',
        photo: 'https://pbs.twimg.com/profile_images/1381184057225056256/2YyZcoUA_400x400.jpg'
    },

    {
        id: 1,
        name: 'Milktpapi',
        photo: 'https://pbs.twimg.com/profile_images/1314252557020143616/pQoHstFY_400x400.jpg'
    },

    {
        id: 2,
        name: 'denciee',
        photo: 'https://pbs.twimg.com/profile_images/1360931468319494145/D4G5dZfm_400x400.jpg'
    },

    {
        id: 3,
        name: 'nick_junas',
        photo: 'https://pbs.twimg.com/profile_images/1317490671251464194/4Ejzk5Yn_400x400.jpg'
    },

    {
        id: 4,
        name: 'kaycee',
        photo: 'https://pbs.twimg.com/profile_images/1376219347375415298/TZ2dlezo_400x400.jpg'
    },

    {
        id: 5,
        name: 'Archillect',
        photo: 'https://pbs.twimg.com/profile_images/1045579977067024384/S0luKMwQ_400x400.jpg'
    },

    {
        id: 6,
        name: 'Omskirt',
        photo: 'https://pbs.twimg.com/profile_images/1382713658430484488/3HCIuj8Q_400x400.jpg',
    }

]

export const Tweets = [
    {
        id: 1,
        profilepic: 'https://pbs.twimg.com/profile_images/1381184057225056256/2YyZcoUA_400x400.jpg',
        name: 'Mika',
        username: '@mkjrp',
        time: '20m',
        tweetText: 'Hello world!'
    },

    {
        id: 2,
        profilepic: 'https://pbs.twimg.com/profile_images/1382713658430484488/3HCIuj8Q_400x400.jpg',
        name: 'Omskirt',
        username: '@mikasalamanca',
        time: '2m',
        tweetText: 'Naiiyak ako. My sister and her 2 kids helped in replenishing the Tabang Komunidad community pantry today in our brgy. The kids asked to join daw because they also want to help. Ayan, mga bata ang may gawa nito. Pati ba mga bata na inosente sasabihin nyo komunista din? Mga 6al!',
        photo: 'https://pbs.twimg.com/media/EzY2C02VoAIMAvb?format=jpg&name=large',
    },

    {
        id: 3,
        profilepic: 'https://pbs.twimg.com/profile_images/595303483659587584/V-8JB3-E_400x400.png',
        name: 'so sad today',
        username: '@sosadtoday',
        time: '1d',
        tweetText: 'am i actually supposed to, like, live my life',
    },

    {
        id: 4,
        name: 'Rappler',
        username: '@rapplerdotcom',
        profilepic: 'https://pbs.twimg.com/profile_images/1282723244357718016/9ptRK0X1_400x400.jpg',
        tweetText: 'LOOK: Congressman Neri Colmenares orients Ana Patrica Non, organizer of the Maginhawa Community Pantry, on her basic rights amid false red-tagging claims against her and other groups that helped in the initiative. | via @nickvillavecer',
        photo: 'https://pbs.twimg.com/media/EzeGlIiVUAAWvXs?format=jpg&name=large'
    },

    {
        id: 5,
        profilepic: 'https://pbs.twimg.com/profile_images/1227193514905047040/Cta3wU7A_400x400.jpg',
        name: 'Mikhail',
        username: '@mikhail1234',
        time: '55m',
        tweetText: 'Red-tagging community pantries only continues to expose one thing: that the Duterte admin CANNOT bear to see united, empowered communities.'

    },

    {
        id: 6,
        profilepic: 'https://pbs.twimg.com/profile_images/1384493353316671490/kR27fGBE_400x400.jpg',
        name: 'krishsh',
        username: '@krishakira',
        time: '30s',
        tweetText: 'Lorem Ipsum'
    }
]