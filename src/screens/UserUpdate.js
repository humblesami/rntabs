import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import apiClient from '../api';
import NavButton from '../navigation/navbutton';
import ErrorMessage from './ErrorMessage';


class AddUserScreen extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            email: '',
            mobile: '',
            isLoading: false
        };
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    clear_state(){
        this.setState({
            id: '',
            name: '',
            email: '',
            mobile: '',
            isLoading: false,
        });
    }

    get_state(){
        return {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
        }
    }

    storeUser() {
        let obj_this = this;
        if (this.state.name === '') {
            alert('Fill at least your name!')
        } else {
            this.setState({
                isLoading: true,
            });
            apiClient.post_data('/user-update', obj_this.get_state()).then((res) => {
                if(res && res.status == 'success'){
                    obj_this.clear_state();
                    obj_this.props.navigation.navigate('UserSList');
                }
                else{
                    if(res && res.status == 'error'){
                        obj_this.setState({
                            error: res.data,
                            isLoading: false,
                        });
                    }
                }

            }).catch((err) => {
                err = "Error: " + err;
                obj_this.setState({
                    error: err,
                    isLoading: false,
                });
            });
        }
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
        return (
            <ScrollView style={styles.container}>
                <NavButton onPress={() => obj_this.props.navigation.navigate('UserList')} />
                <ErrorMessage txt={obj_this.state.error} />
                <View>
                    <TextInput
                        placeholder={'Id'}
                        defaultValue={this.state.id}
                        editable={false}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder={'Name'}
                        defaultValue={this.state.name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder={'Email'}
                        defaultValue={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <TextInput
                        placeholder={'Mobile'}
                        defaultValue={this.state.mobile}
                        onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Add User'
                        onPress={() => this.storeUser()}
                        color="#19AC52"
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
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

export default AddUserScreen;