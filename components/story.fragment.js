import          React                                   from 'react';
import          { View, TouchableOpacity, StyleSheet  } from "react-native";
import          Icon                                    from 'react-native-vector-icons/Entypo';

export default class Story extends React.Component {
    constructor(props) { super(props); }

    render() {
        return(
            <TouchableOpacity style={[stylesheet.story, stylesheet.styling]} underlayColor={'#FFF'}>
                <TouchableOpacity style={stylesheet.plus}><Icon name="plus" size={11} color={"#FFF"} /></TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const stylesheet = StyleSheet.create({
        story:          { width: 48, height: 48, borderRadius: 50, backgroundColor: '#FFF', flexDirection: 'column', justifyContent: 'center', alignItems:'center' },
        styling:        { shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, },
        plus:           { position: 'absolute', right: -4, top: 26, backgroundColor: '#00a4e4', borderRadius: 8, width: 12, height: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
});