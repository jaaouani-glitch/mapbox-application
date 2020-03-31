import React                                from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Modal, FlatList,
    Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView }    from 'react-native';
import Icon                                                                 from'react-native-vector-icons/FontAwesome5';

export default class RegisterScreen extends React.Component {
    constructor(props) { super(props); 
        this.onSignup    =   this.onSignup.bind(this);
    }

    onSignup() { this.props.navigation.navigate('Login'); } 

    render() {
        return(
            <SafeAreaView style={stylesheet.container}>
            <KeyboardAvoidingView style={stylesheet.container} behavior={'padding'}>
                <View style={stylesheet.nav}><TouchableOpacity onPress={this.onSignup}><Icon name="chevron-left" color={'#ec008c'} size={25} /></TouchableOpacity></View>
                <View style={stylesheet.form}>
                    <View style={stylesheet.formone}>
                        <TextInput style={stylesheet.input} placeholder={'Nom'} />
                        <TextInput style={stylesheet.input} placeholder={'Prénom'} />
                    </View>
                    <View style={stylesheet.formtwo}><TextInput style={stylesheet.normal} placeholder={'E-mail'} /></View>
                    <View style={stylesheet.formtwo}><TextInput style={stylesheet.normal} placeholder={'Mot de passe'} secureTextEntry={true} /></View>
                </View>
            </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const stylesheet = StyleSheet.create({
    container:      { flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: '#FFFFFF' },
    nav      :      { paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', position: 'relative', top: 40 },
    form     :      { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 300 },
    formone  :      { width: Dimensions.get('window').width, height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
    input    :      { borderColor: '#D5D5D7', borderWidth: 0.85, borderRadius: 8, paddingHorizontal: 15, fontFamily: 'Nunito-Bold', width: (Dimensions.get('window').width / 2) - 40 },
    normal   :      { borderColor: '#D5D5D7', borderWidth: 0.85, borderRadius: 8, paddingHorizontal: 15, fontFamily: 'Nunito-Bold', width: Dimensions.get('window').width - 40 },
    formtwo  :      { width: Dimensions.get('window').width, height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, }
});