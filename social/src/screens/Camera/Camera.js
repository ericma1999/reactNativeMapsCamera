import React from 'react'
import {View, Text} from 'react-native'

import {CameraKitCamera} from 'react-native-camera-kit'



const Camera = () => (
    <CameraKitCamera
  ref={cam => this.camera = cam}
  style={{
    flex: 1,
    backgroundColor: 'white'
  }}
  cameraOptions={{
    flashMode: 'auto',             // on/off/auto(default)
    focusMode: 'on',               // off/on(default)
    zoomMode: 'on'
  }}
  onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional
  
/>
)


export default Camera