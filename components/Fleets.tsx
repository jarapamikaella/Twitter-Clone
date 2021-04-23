import * as React from 'react';
import { Image} from 'react-native';
import { Text, View } from './Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../screens/styles';

const renderFleet = (item : any, navigation: any) => {
    return <View style={styles.fleet} key={item.id}>
        <View style={styles.fleetlist}>
            <TouchableOpacity>
                <View style={{borderWidth: 2.3, borderRadius: 100, borderColor: '#1DA1F2'}}>
                    <Image
                        style={styles.photo}
                        source={{ uri: item.photo }}
                    />
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.fleetnames}>{item.name}</Text>
            </View>
        </View>
    </View>
}
export default renderFleet;