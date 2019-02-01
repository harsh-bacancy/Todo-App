//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

// create a component
class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
        }
    }
    

    addTodo = (text) => {
        console.log('onChnageText',text)
        this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    placeholder='Input Text Here'
                    style={styles.TextInput}
                />
                <TouchableOpacity
                    onPress={() => this.addTodo(this.state.text)}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, backgroundColor: '#eaeaea' }}>
                        <Text style={{ padding: 10, color: '#ff959f', fontWeight: '500', fontSize: 15 }}>ADD</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        marginHorizontal: 20
    },
    TextInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#eaeaea',
        height: 50,
        padding: 10
    }
});

//make this component available to the app
export default connect()(AddTodo);


