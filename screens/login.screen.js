import React                                                                from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Modal, FlatList,
        Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView }    from 'react-native';
import Icon                                                                 from'react-native-vector-icons/FontAwesome5';

import codes                                                                from '../resources/codes.json';
import { configuration }                                                    from '../configuration';

export default class LoginScreen extends React.Component {
    constructor(props) { super(props); 
            this.state  = { code: '+33', number: '', phone: '', show: false };
            this.onCode   = this.onCode.bind(this);         this.onNumber   = this.onNumber.bind(this);
            this.onEndNumber = this.onEndNumber.bind(this); this.onEndCode  = this.onEndCode.bind(this);
            this.onSignUp    = this.onSignUp.bind(this);    this.onClose    = this.onClose.bind(this);
            this.onDial      = this.onDial.bind(this);
    }

    onCode(event)       { this.setState({ show:   !this.state.show }); }   
    onNumber(event)     { this.setState({ number: event }); }  

    onSignUp(event)     { this.props.navigation.navigate('Register'); }
    onClose(event)      { this.setState({ show: !this.state.show }); }
    onDial(event)       { this.setState({ show: !this.state.show, code: event }); }

    onEndCode(event)    { this.setState({ code: event }); }
    onEndNumber(event)  { this.setState({ number: event.nativeEvent.text }); }
    
    render() {
        return(
            <SafeAreaView style={stylesheet.container}>
            <KeyboardAvoidingView style={stylesheet.container}>
                <View style={stylesheet.logo}><Image source={require('../resources/images/icon.png')} style={stylesheet.icon} /></View>
                <View style={stylesheet.form}>
                    <Text style={stylesheet.title}>Connectez-vous.</Text>
                    <View style={stylesheet.formone}>
                        <View style={[stylesheet.code, stylesheet.align]}>
                            <TouchableOpacity  style={stylesheet.input} onPress={this.onCode}><Text style={stylesheet.gutch}>{this.state.code}</Text>
                                <Icon name={'caret-down'} size={15} color={'#ec008c'} style={{ backgroundColor: 'transparent' }} /></TouchableOpacity>
                        </View>
                        <TextInput style={stylesheet.number} placeholder={'Numéro de téléphone.'} onChangeText={this.onNumber} onEndEditing={this.onEndNumber} maxLength={9} />
                    </View>
                    <View style={[stylesheet.formtwo]}>
                        <TextInput style={stylesheet.password} placeholder={'Mot de passe'} secureTextEntry={true} />
                        <TouchableOpacity underlayColor={'#ec008c'} style={stylesheet.confirm}><Icon name={'chevron-right'} color={'#fff'} size={22} /></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={stylesheet.button} onPress={this.onSignUp}><Text style={stylesheet.font}>Créer un compte</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <Modal visible={this.state.show} animationType={'slide'} transparent={true} animationType={'slide'} animated={true}>
                <View style={stylesheet.content}>
                    <View style={[stylesheet.tool, stylesheet.shadow]}>
                        <TouchableOpacity  onPress={this.onClose} style={{ height: 50, width: 55, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}><Icon name="chevron-left" color={'#D5D5D5'} size={22}/></TouchableOpacity>
                        <Text              style={stylesheet.phone}>Connexion Spottd</Text>
                    </View>
                    <FlatList 
                            data           ={codes}
                            keyExtractor   ={() => (Math.random() * 10).toString() }
                            renderItem     ={({item}) => 
                            <TouchableOpacity style={stylesheet.item} onPress={() => this.onDial(item.dial_code)}>
                                <Text style={stylesheet.name}>{item.name}</Text>
                                <Text style={stylesheet.name}>{item.dial_code}</Text>
                            </TouchableOpacity>}
                    />
                </View>
            </Modal>
            </SafeAreaView>
        );
    }
}

const stylesheet = StyleSheet.create({
    container   : { flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFFFFF' },
    form        : { width: Dimensions.get('window').width, height: 340, backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 14 },
    logo        : { width: Dimensions.get('window').width, height: 60,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    icon        : { maxWidth: 55, resizeMode: 'contain', position: 'relative', top: 7 },
    title       : { fontFamily: 'Nunito-ExtraBold', fontSize: 24, color: '#ec008c' },
    formone     : { width: Dimensions.get('window').width, height: 47, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, paddingRight: 10, position: 'relative', left: -10 },
    formtwo     : { width: Dimensions.get('window').width, height: 47, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, paddingRight: 10, position: 'relative', left: -10 },

    code        : { maxWidth: 66, flex: 1, borderWidth: 0.85, borderColor: '#D5D5D7', borderRadius: 8, fontFamily: 'Nunito-Bold', height: '100%' },
    number      : { borderColor: '#D5D5D7', borderWidth: 0.85, borderRadius: 8, paddingHorizontal: 15, fontFamily: 'Nunito-Bold', position: 'relative', width: (Dimensions.get('window').width - 103) },
    password    : { borderColor: '#D5D5D7', borderWidth: 0.85, borderRadius: 8, paddingHorizontal: 15, fontFamily: 'Nunito-Bold', width: (Dimensions.get('window').width - 90) },
    confirm     : { flex: 1, maxWidth: 55, backgroundColor: '#ec008c', fontFamily: 'Nunito-ExtraBold', height: '90%', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'relative', top: 2 },
    align       : { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 6 },
    input       : { fontFamily: 'Nunito-ExtraBold', fontSize: 12,  flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    bg          : { resizeMode: 'contain', position: 'absolute', top: -2, bottom: 0, left: -15, width: Dimensions.get('window').width, zIndex: -1 },
    gutch       : { fontFamily: 'Nunito-ExtraBold', fontSize: 14, color: '#ec008c' },
    content     : { width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2, position: 'absolute', top: Dimensions.get('window').height / 2, backgroundColor: '#FFF', left: 0, right: 0, borderWidth: 0.5, borderColor: 'silver', borderTopLeftRadius: 30, borderTopRightRadius: 30 },

    button      : { width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'relative', top: 10, borderBottomWidth: 1, borderBottomColor: '#ec008c', alignSelf: 'center', maxWidth: 125, padding: 5 },
    font        : { fontFamily: 'Nunito-ExtraBold', color: '#ec008c', fontSize: 14 },
    item        : { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', height: 45, paddingHorizontal: 10 },
    name        : { fontFamily: 'Nunito-Bold', fontSize: 15, color: 'silver' },
    tool        : { height: 55, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 40, position: 'relative', top: -5, width: Dimensions.get('window').width, left: -1.4, backgroundColor: '#FFF' },
    shadow      : { shadowColor: "silver", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 2, shadowRadius:10, elevation: 1, borderTopLeftRadius: 40, borderTopRightRadius: 30, borderWidth: 0.7, borderColor: 'silver' },
    phone       : { flex: 1, fontFamily: 'Nunito-ExtraBold', fontSize: 14, color: '#ec008c', position: 'relative', left: (Dimensions.get('window').width / 3) - 65 }
});