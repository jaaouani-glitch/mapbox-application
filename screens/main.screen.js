import React                                                                                        from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, ScrollView, TouchableOpacity, Text, Platform } from "react-native";
import MapboxGL                                                                                     from "@react-native-mapbox-gl/maps";
import Icon                                                                                         from 'react-native-vector-icons/FontAwesome5';

import  CustomNavigation                              from '../navigation/navigation';
import Popular                                        from '../components/popular.fragment';
import Story                                          from '../components/story.fragment';
import { configuration }                              from '../configuration';

/* > initializing before usage. */   MapboxGL.setAccessToken(configuration.MAP_ACCESS_TOKEN); 
export default class MainScreen extends React.Component {
    constructor(props) { super(props); 
        this.state             = { currentCoordinates: [ 45.1667, 5.7167 ], granted: false };
        this.centerLocation    = this.centerLocation.bind(this);
    }
    
    async componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
        if(Platform.OS === 'android') { 
            const granted  = await MapboxGL.requestAndroidLocationPermissions(); 
            this.setState({ granted: granted });
        }
    }

    async centerLocation() {
        if(Platform.OS === 'android' && this.state.granted !== true) { 
            const granted  = await MapboxGL.requestAndroidLocationPermissions(); 
            this.setState({ granted: granted });
        }
    }

    render() {
      return(
        <SafeAreaView style={stylesheet.container}>
            <View style={stylesheet.mapbox}>
                <CustomNavigation style={stylesheet.navigation} />
                <View style={stylesheet.stories}>
                    <Story />
                </View>
                <MapboxGL.MapView style={stylesheet.map} styleURL={configuration.MAP_STYLE_URL} logoEnabled={false} attributionEnabled={false} compassEnabled={false} centerCoordinates={this.state.currentCoordinates} showUserLocation={true} />
                <MapboxGL.Camera       zoomLevel={12} followUserLocation={true} animationMode={'flyTo'} animationDuration={0} />
                <MapboxGL.UserLocation onUpdate={(location) => {
                    const current = [ location.coords.longitude, location.coords.latitude ];
                    const initial = [ 45.1667, 5.7167 ];
                        this.setState({ currentCoordinates:  current ? current : initial });
                }} visible={true} renderMode={'normal'} animated={true} />
                <View style={stylesheet.utility}>
                        <Text style={stylesheet.title}>Populaires</Text>
                        <TouchableOpacity><Icon name="location-arrow" color={"#FFF"} size={22} /></TouchableOpacity>
                </View>
                <ScrollView style={stylesheet.popular} contentContainerStyle={stylesheet.content} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <Popular />
                    <Popular style={{ marginLeft: 5 }} />
                    <Popular style={{ marginLeft: 5 }} />
                </ScrollView>
            </View>
        </SafeAreaView>
      );
    }
}

const stylesheet = StyleSheet.create({
    container   : { flex: 1, justifyContent: 'space-around', alignItems: 'flex-start', backgroundColor: '#F5FFCC' },
    mapbox      : { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
    navigation  : { position: 'absolute', top: 10, zIndex: 1 },
    map         : { flex: 1 },
    content     : { justifyContent: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'transparent' },
    popular     : { backgroundColor: 'transparent', zIndex: 1, height: 150, position: 'absolute', top: Dimensions.get('window').height * 0.77, width: Dimensions.get('window').width, paddingLeft: 14 },
    utility     : { width: Dimensions.get('window').width, position: 'absolute', top: Dimensions.get('window').height * 0.74, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, zIndex: 1 },
    title       : { fontFamily: 'Nunito-Bold', color: '#FFF', fontSize: 16 },
    stories     : { position: 'absolute', top: 70, backgroundColor: 'transparent', zIndex: 1, width: Dimensions.get('window').width, paddingHorizontal: 20 }
});