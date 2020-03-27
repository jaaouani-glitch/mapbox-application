import               React                               from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon                                              from 'react-native-vector-icons/FontAwesome';

// #eef7ff
export default class Search extends React.Component {
    constructor(props) { super(props); }

    render() {
        return(
            <View style={[stylesheet.search]}>
                <TextInput placeholder={'Recherche'} placeholderTextColor={'#FFFFFF'} style={stylesheet.input} />
                <TouchableOpacity><Icon name="search" size={20} color={'#FFFFFF'} /></TouchableOpacity>
            </View>
        );
    }
}

const stylesheet = StyleSheet.create({
    search: { flex: 1, height: 38, borderWidth: 1, backgroundColor: 'rgba(213, 213, 213, 0.6)', borderColor: 'rgba(213, 213, 213, 0.6)', borderRadius: 10, justifyContent: 'flex-start', paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', fontFamily: 'Nunito-Bold', color: '#FFF' },
    input:  { color: '#FFF', fontFamily: 'Nunito-Bold', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }
});