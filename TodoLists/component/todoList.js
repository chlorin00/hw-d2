import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import firebase from '../firebase';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.ref = null;
        this.state = {
            loading: false,
            data: [],
            refreshing: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.ref = firebase.database().ref('data');
        this.ref.on('value', this.handleToDoUpdate);
    }

    handleToDoUpdate = (snapshot) => {
        this.setState({
            loading: false,
            data: snapshot.val() || {},
        });
        console.log(this.state);
        console.log(this.state.data);
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE"
                }}
            />
        );
    };

    _renderItem = ({ item }) => (
        <ListItem
            id = { item.id }
            title = { item.header }
            containerStyle = {{ borderBottomWidth: 0, margin: 10 }}
            hideChevron
        />
    )

    render() { 
        return (
            <List containerStyle = {{ marginTop: 0 }} >
                <FlatList
                    data = {this.state.data}
                    renderItem = { this._renderItem }
                    ItemSeparatorComponent = { this.renderSeparator }
                />
            </List>
        );
    }
}