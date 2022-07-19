import { Component } from 'react';


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
        console.log(this.state, this.attributes, received_obj);
        if(received_obj && received_obj.id){
            this.attributes.forEach((prop)=>{
                _self.state[prop] = received_obj[prop];
            });
        }
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

export default EditScreen;