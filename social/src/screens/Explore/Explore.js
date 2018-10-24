import React, {Component} from 'react'
import {View,Text, Dimensions, StyleSheet} from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default class Explore extends Component {
    static navigatorStyle = {
        navBarHidden: true
      };

      constructor(props) {
          super(props);
      }

      render() {
        return (<MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      />)
      }
}


