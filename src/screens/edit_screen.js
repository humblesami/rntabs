import { Component } from 'react';
import apiClient from '../api';
import { StyleSheet } from 'react-native';

class EditScreen extends Component {
    attributes = [];
    constructor(received) {
        super(received);
    }

    init_state(attributes, received_obj){
        let _self = this;
        this.state = {};
        this.attributes = attributes;
        this.attributes.forEach((prop)=>{
            _self.state[prop] = '';
        });
        // console.log(this.state, this.attributes, received_obj);
        if(received_obj && received_obj.id){
            this.attributes.forEach((prop)=>{
                _self.state[prop] = received_obj[prop];
            });
        }
    }

    store_data(endpoint, next_screen){
        let obj_this = this;
        this.setState({
            isLoading: true,
        });
        apiClient.post_data(endpoint, obj_this.get_state()).then((res) => {
            // console.log(res);
            if(res && res.status == 'success'){
                obj_this.reset_state();
                obj_this.props.navigation.navigate(next_screen, {q: new Date().toString()});
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

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    set_state(item){
        let json_obj = {};
        this.attributes.forEach((prop)=>{
            json_obj[prop] = item[prop];
        });
        this.setState(json_obj);
    }

    reset_state(){
        let json_obj = {};
        this.attributes.forEach((prop)=>{
            json_obj[prop] = '';
        });
        this.setState(json_obj);
    }

    get_state(){
        let json_obj = {};
        let item = this.state;
        this.attributes.forEach((prop)=>{
            json_obj[prop] = item[prop];
        });
        return json_obj;
    }
}

const EditStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
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
    },
    buttonWithText: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        flexWrap: "wrap",
        flexDirection: "row",
    },

});

export { EditScreen, EditStyles};