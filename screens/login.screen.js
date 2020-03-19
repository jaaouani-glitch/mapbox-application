import React                                          from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';

import { configuration }                              from '../configuration';

export default class LoginScreen extends React.Component {
    constructor(props) { super(props); }

    render() {
        return(
            <SafeAreaView style={stylesheet.container}>
            </SafeAreaView>
        );
    }
}

const stylesheet = StyleSheet.create({
    container   : { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
    mapbox      : { width: Dimensions.get('window').width, height: 300 },
    map         : { flex: 1 }
});