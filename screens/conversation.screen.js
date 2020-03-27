import                  React                                    from 'react';
import    { TouchableOpacity, View, StyleSheet, SafeAreaView }   from 'react-native';

export default class ConvertsationScreen extends React.Component {
    constructor(props) { super(props); }

    render() {
        return(
            <SafeAreaView style={stylesheet.container}>
            </SafeAreaView>
        );
    }
}

const stylesheet = StyleSheet.create({
    container:      { flex: 1, backgroundColor: '#FFF', justifyContent: 'flex-start', alignItems: 'center' }
});