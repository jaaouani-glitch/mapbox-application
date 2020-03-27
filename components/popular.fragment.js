import               React                                     from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon                                                    from 'react-native-vector-icons/EvilIcons';

// #eef7ff
export default class Popular extends React.Component {
    constructor(props) { super(props); }

    render() {
        return(
            <View style={[stylesheet.popular, this.props.style]}>
                <Text style={stylesheet.username}>@jaaouanio</Text>
                <Text style={stylesheet.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Da Aenean non sagittis est. Praesent interdum purus a finibus tempor...</Text>
                <View style={stylesheet.tools}>
                    <TouchableOpacity><Icon name="heart" size={26} color={'#D5D5D5'} /></TouchableOpacity>
                    <TouchableOpacity><Icon name="share-apple" size={26} color={'#D5D5D5'} /></TouchableOpacity>
                    <TouchableOpacity></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const stylesheet = StyleSheet.create({
    popular:  { backgroundColor: '#FFF', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: '#FFF', height: 125, paddingHorizontal: 10, borderRadius: 8, paddingTop: 3, paddingBottom: 3, width: 310 },
    tools:    { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', maxHeight: 30, flex: 1, },
    text:     { fontSize: 13, fontFamily: 'Nunito-Bold', color: 'rgba(0, 0, 0, 0.6)', flex: 1, textAlign: 'left', position: 'relative', top: 9 },
    username: { fontWeight: 'bold', fontFamily: 'Nunito-Bold', color: '#ec008c', position: 'relative', top: 2 }
});