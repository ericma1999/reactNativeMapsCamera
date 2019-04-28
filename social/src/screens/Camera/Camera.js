import React, {Component} from 'react'
import {Dimensions, StyleSheet, TouchableHighlight, Image, View} from 'react-native'

import {CameraKitCamera} from 'react-native-camera-kit'
import Icon from 'react-native-vector-icons/Feather'

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    Camera: {
        flex: 1,
        height: Dimensions
            .get('screen')
            .height,
        width: Dimensions
            .get('screen')
            .width,
        backgroundColor: 'black'
    },
    CaptureButton: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 60,
        zIndex: 10
    },
    BackButton: {
        position: 'absolute',
        top: 40,
        left: 15,
        alignSelf: 'flex-start'
    },
    FlashButton: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        alignSelf: 'flex-end'
    },
    GalleryButton: {
        position: 'absolute',
        bottom: 50,
        left: 30,
        alignSelf: 'flex-start'
    },
    Icon: {
        color: 'white'
    }
})

class Camera extends Component {

    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden: true
    };

    constructor(props) {
        super(props);
    }

    onBackButtonPressed = () => {
      this.props.navigator.pop({
        animated: true
      });
    }
    render() {
        return (
            <View style={styles.Container}>
                <CameraKitCamera
                    actions={{
                        rightButtonText: 'Done',
                        leftButtonText: 'Cancel'
                    }}
                    ref={cam => this.camera = cam}
                    style={styles.Camera}
                    cameraOptions={{
                        flashMode: 'off', // on/off/auto(default)
                        focusMode: 'on', // off/on(default)
                        zoomMode: 'on'
                    }}
                    flashImages={{
                        on: require('../../images/flashOn.png'),
                        off: require('../../images/flashOff.png'),
                        auto: require('../../images/flashAuto.png')
                    }}
                    onBottomButtonPressed={(event) => alert('asd')}
                    captureButtonImage={require('../../images/cameraButton.png')}></CameraKitCamera>
                <TouchableHighlight style={styles.CaptureButton} onPress={() => alert('test')}>
                    <Image source={require('../../images/cameraButton.png')}/>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.onBackButtonPressed}
                    style={styles.BackButton}>
                    <Icon name="arrow-left" size={40} style={styles.Icon}/>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => alert("going flash")}
                    style={styles.FlashButton}>
                    <Icon name="zap" size={35} style={styles.Icon}/>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => alert("going gallery")}
                    style={styles.GalleryButton}>
                    <Icon name="image" size={35} style={styles.Icon}/>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Camera