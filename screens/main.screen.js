import React                                          from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import MapboxGL                                       from "@react-native-mapbox-gl/maps";

import  CustomNavigation                              from '../navigation/navigation';
import { configuration }                              from '../configuration';

/* > initializing before usage. */   MapboxGL.setAccessToken(configuration.MAP_ACCESS_TOKEN); 
export default class MainScreen extends React.Component {
    constructor(props) { super(props); }
    
    componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
    }

    render() {
      return(
        <SafeAreaView style={stylesheet.container}>
            <View style={stylesheet.mapbox}>
                <CustomNavigation style={stylesheet.navigation}/>
                <MapboxGL.MapView style={stylesheet.map} styleURL={configuration.MAP_STYLE_URL} 
                    logoEnabled={false} attributionEnabled={false} compassEnabled={false} />
            </View>
        </SafeAreaView>
      );
    }
}

const stylesheet = StyleSheet.create({
    container   : { flex: 1, justifyContent: 'center', alignItems: 'flex-start', backgroundColor: '#F5FFCC' },
    mapbox      : { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
    navigation  : { position: 'absolute', top: 20, zIndex: 1 },
    map         : { flex: 1 },
});