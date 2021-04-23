import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    fleet: {
        height: 90,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
    
      fleetlist: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      photo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: '#F5F8FA',
        borderWidth: 2,
      },
    
      fleetnames: {
        paddingTop: 4,
        fontSize: 12,
      },
    
      tweetView: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        borderBottomWidth: .3,
        borderBottomColor: '#AAB8C2'
      },
    
      tweetImage: {
        width: "95%",
        height: 200,
        marginLeft: 8,
        marginBottom: 8,
        borderRadius: 12,
      },
    
      profilePic: {
        height: 55,
        width: 55,
        borderRadius: 100,
      },
    
      profilePicContainer: {
        paddingTop: 4,
        backgroundColor: 'transparent'
      },
    
      tweetContainer: { 
        width: '100%', 
        flex: 1, 
        backgroundColor: 'transparent' 
      },
      
      tweetHeader: { 
        flexDirection: 'row', 
        backgroundColor: 'transparent',
        paddingEnd: 12,
      },
    
      tweetNameUsername: { 
        flexDirection: 'row', 
        width: '100%', 
        backgroundColor: 'transparent' 
      },
    
      tweetName: { 
        marginHorizontal: 8, 
        fontWeight: 'bold', 
        backgroundColor: 'transparent' 
      },
    
      tweetText: { 
        paddingBottom: 8, 
        paddingHorizontal: 8, 
      },
    
      tweetFooterButtons: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginRight: 50, 
        marginLeft: 8,
        marginTop: 5, 
        backgroundColor: 'transparent',
      }
});

export default styles;