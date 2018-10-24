import React, {Component} from 'react'
import {
    View,
    Platform,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

const {width, height} = Dimensions.get('window')

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        marginBottom: 10
    },
    buttonsContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: '50%',
        right: 10
    },
    searchContainer: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        backgroundColor: 'white'
    },
    textInput: {
        fontSize: 20,
        width: 250,
        height: Platform.OS === 'ios' ? 30 : 50,
    }
})


export default class Explore extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };

    constructor(props) {
        super(props);
    }

    onCameraPress = () => {
        this.props.navigator.push({
            screen: "social.CameraScreen"
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }}>
            </MapView>
            <View pointerEvents='box-none' style={styles.buttonsContainer}>
                <TouchableHighlight style={styles.button} onPress={this.onCameraPress}>
                    <Icon name="camera" size={35}/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Icon name="camera" size={35}/>
                </TouchableHighlight>
            </View>
            <View style={styles.searchContainer}>
                <TextInput placeholder={"ajsdasjkd"} style={styles.textInput}/>
            </View>
            </View>
        )
    }

}
