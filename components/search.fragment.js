import               React             from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

// #eef7ff
export default class Search extends React.Component {
    constructor(props) { super(props); }

    render() {
        return(
            <View style={[stylesheet.search]}>
                <TextInput placeholder={'Recherche'} placeholderTextColor={'#FFFFFF'} />
            </View>
        );
    }
}

const stylesheet = StyleSheet.create({
    search: { flex: 1, height: 38, borderWidth: 1, backgroundColor: '#D5D5D5', opacity: 0.6, borderColor: '#D5D5D5', borderRadius: 10, justifyContent: 'flex-start', paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', fontFamily: 'Nunito-Bold', color: '#FFF' },
});