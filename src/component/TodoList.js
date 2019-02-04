//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const TodoList = ({ todos, toggleTodo }) => {
    console.log('todolist', todos.text)
    return (
        <View style={styles.container}>
            {todos.map(todo =>
                <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                    <Text
                        style={{
                            fontSize: 24,
                            marginVertical: 5,
                            textDecorationLine: todo.completed ? 'line-through' : 'none'
                        }}
                    >
                        {todo.text}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor: 'red'
    },
});

//make this component available to the app
export default TodoList;
