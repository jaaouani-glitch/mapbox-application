import                      React                                           from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity }  from 'react-native';
import Icon                                                                 from 'react-native-vector-icons/Feather';

import Search           from '../components/search.fragment';

export default class CustomNavigation extends React.Component {
    constructor(props)      { super(props); }
    
    render() {

        return(
            <View style={[stylesheet.container, this.props.style]}>
                <TouchableOpacity style={stylesheet.button}><Icon name="settings" size={26} color={'#FFF'} style={stylesheet.icon}/></TouchableOpacity>
                <Search />
                <TouchableOpacity style={stylesheet.button}><Icon name="message-circle" size={26} color={'#FFF'} style={stylesheet.icon}/></TouchableOpacity>
            </View>
        );
    }
}

const   stylesheet = StyleSheet.create({
        container:          { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height: 45, backgroundColor: 'transparent', position: 'absolute', width: Dimensions.get('window').width },
        button:             { justifyContent: 'center', flexDirection: 'row', alignItems: 'center', width: 50 },
        icon:               { }
});