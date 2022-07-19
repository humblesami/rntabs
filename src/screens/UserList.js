// screens/UserScreen.js

import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'
// import { FlatList } from 'react-native-web';
import apiClient from '../api';
import NavButton from '../navigation/navbutton';
import {EditStyles} from './edit_screen';


class UserScreen extends Component {

    constructor(received) {
        super();
        this.state = {
            isLoading: true,
            userArr: [],
            error: ''
        };
        this.getData();
        console.log(received.route.params);
    }

    getData(){
        let obj_this = this;

        apiClient.get_data('/user-list', {a:1, b:2}).then(function(res){
            // console.log("response", res);
            if(res.status == 'error'){
                obj_this.setState({ error: res.data, isLoading: false });
            }
            else{
                obj_this.setState({ userArr : res.data, isLoading: false});
            }
            // console.log(res.data);
        }).catch((err) => {
            obj_this.setState({ error: 'Error in request '+err, isLoading: false });
        });
    }

    render() {
        let obj_this = this;
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        let error_message = obj_this.state.error;
        //<NavButton onPress={() => obj_this.props.navigation.navigate('UserUpdate')} />
        return (
            <ScrollView style={EditStyles.container}>
                <View style={EditStyles.buttonWithText}>
                    <View>
                        <NavButton onPress={() => obj_this.props.navigation.navigate('UserUpdate', {q: new Date().toString()})} />
                    </View>
                    <View style={{paddingTop: 10, paddingLeft:10}}>
                        <Text>Add New User</Text>
                    </View>
                </View>
                <View style={styles.messageOnly}>
                    <Text>{error_message}</Text>
                </View>
                {
                    obj_this.state.userArr.map((item, i) => {
                        item.mobile = item.mobile ? item.mobile : item.phone;
                        return (
                            <ListItem
                                key={item.id}
                                bottomDivider
                                title={item.name}
                                subtitle={item.email}
                                onPress={() => {
                                    obj_this.props.navigation.navigate('UserUpdate', item);
                                }}
                            >
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                            </ListItem>
                        );
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 22
    },
    messageOnly:{
        paddingTop: 30,
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default UserScreen;