import React                             from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

export default class Introduction extends React.Component {
    constructor(props)  { super(props); }

    render() {
        return(
            <View style={[stylesheet.container, stylesheet.adaptor]}>
                <Image style={stylesheet.logo}  source={require(`../resources/images/icon.png`)} />
                <Image style={stylesheet.cover} source={require(`../resources/images/3.png`)} />
                <Text style={stylesheet.title}>{this.props.content.title}</Text>
                <Text style={stylesheet.description}>{this.props.content.description}</Text>
            </View>
        );
    }
}

const stylesheet = StyleSheet.create({
    container   : { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    adaptor     : { width: Dimensions.get('window').width, height: '100%' },
    cover       : { width: 230, height: '100%', resizeMode: 'contain', position: 'relative', top: -220 },
    title       : { fontFamily: 'THSarabunNew Bold', color: '#ec008c', fontSize: 45, position: 'relative', top: -390 },
    description : { fontFamily: 'THSarabunNew', color: '#ec008c', fontSize: 26, position: 'relative', top: -400 },
    logo        : { position: 'relative', width: 80, resizeMode: 'contain', height: '100%', top: 120 }
});