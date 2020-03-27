import                      React                         from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput }  from 'react-native';

import Search           from '../components/search.fragment';

export default class CustomNavigation extends React.Component {
    constructor(props)      { super(props); }
    
    render() {

        return(
            <View style={[stylesheet.container, this.props.style]}>
                <Search />
            </View>
        );
    }
}

const   stylesheet = StyleSheet.create({
        container:          { justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', height: 50, backgroundColor: 'transparent', position: 'absolute', width: Dimensions.get('window').width },
});