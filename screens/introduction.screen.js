import React                                          from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { FlatList }                                   from 'react-native';

import Introduction                                   from '../components/introduction.fragment'; 
import { configuration }                              from '../configuration';

export default class IntroductionScreen extends React.Component {
    constructor(props) { super(props); 
        this.state = { content: [
            { index: '1', title: 'Premier slide',  description: 'Description du premier slide.',  cover: '0' },
            { index: '2', title: 'Deuxieme slide', description: 'Description du deuxieme slide.', cover: '1' },
        ] };
    }

    render() {
        return(
            <SafeAreaView style={stylesheet.container}>
                <View style={stylesheet.flat}>
                    <FlatList 
                        horizontal                     = {true}
                        pagingEnabled                  = {true}
                        data                           = {this.state.content}
                        keyExtractor                   = {(item, index) => index.toString()}  
                        scrollEventThrottle            = {16}
                        showsHorizontalScrollIndicator = {false}
                        style                          = {stylesheet.list}
                        renderItem                     = {({ item }) => <Introduction content={item} /> }
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const stylesheet = StyleSheet.create({
    container   : { flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFFFFF' },
    list        : { width: '100%', height: '100%' },
    flat        : { width: '100%', height: '90%' }
});