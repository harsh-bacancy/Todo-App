import React, { Component } from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import AddTodo from './../container/AddTodo'
import VisibleTodos from '../container/VisibleTodos'

export default class TodoApp extends Component {
    state = {
        todos: [],
        visibilityFilter: 'SHOW_ALL_TODOS'
    }
    render() {
        const { container } = styles
        return (
            <View style={container}>
                <AddTodo />
                <VisibleTodos />
            </View>
        );
    }
} ``

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS  === 'ios' ? 45 : 15,
        backgroundColor: '#FFF'
    }
});