import React                                from 'react';
import { SafeAreaView, StyleSheet }         from 'react-native';

export default class RegisterScreen extends React.Component {
    constructor(props) { super(props); }

    render() {
        return(
            <SafeAreaView style={stylesheet.container}>
            </SafeAreaView>
        );
    }
}

const stylesheet = StyleSheet.create({
    container:      { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FFCC' },
});