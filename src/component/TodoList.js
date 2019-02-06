//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, CheckBox } from 'react-native';

// create a component
const TodoList = ({ todos, toggleTodo, visibilityFilter, visibilityAll, visibilityActive, visibilityCompleted }) => {
    if (visibilityFilter.text == undefined) {
        visibilityFilter.text = 'All'
    }
    const getvisibleTodos = (todos) => {
        switch (visibilityFilter.text) {
            case 'All': {
                return todos
            }
            case 'Active':
                return todos.filter(todo => !todo.completed)
            case 'Completed':
                return todos.filter(todo => todo.completed)
        }
    }
    const visibleTodos = getvisibleTodos(todos)
    console.log('todolist', todos.id, visibilityFilter.text)
    return (
        <View style={styles.container}>
            <View style={styles.filterstyle}>
                <TouchableOpacity onPress={() => visibilityAll('All')}>
                    <Text style={visibilityFilter.text == 'All' ? styles.textSelected : styles.text}>
                        All
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => visibilityActive('Active')}>
                    <Text style={visibilityFilter.text == 'Active' ? styles.textSelected : styles.text}>
                        Active
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => visibilityCompleted('Completed')}>
                    <Text style={visibilityFilter.text == 'Completed' ? styles.textSelected : styles.text}>
                        Completed
                    </Text>
                </TouchableOpacity>
            </View>
            {visibilityFilter.text == 'All'
                ?
                <ScrollView>
                    {visibleTodos.map(todo =>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} key={todo.id} onPress={() => toggleTodo(todo.id)}>
                            <CheckBox disable={todo.completed} value={todo.completed} onValueChange={() => toggleTodo(todo.id)} />
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

                </ScrollView>
                :
                <ScrollView>
                    {visibleTodos.map(todo =>
                        <Text
                            style={{
                                fontSize: 24,
                                marginVertical: 5,
                                textDecorationLine: todo.completed ? 'line-through' : 'none'
                            }}
                            key={todo.id}
                        >
                            {todo.text}
                        </Text>
                    )}
                </ScrollView>
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        // backgroundColor: 'red'
    },
    filterstyle: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: '#eaeaea',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        // marginHorizontal: 20,
    },
    text: {
        fontSize: 20,
        color: '#555'
    },
    textSelected: {
        fontSize: 25,
        color: '#000',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});

//make this component available to the app
export default TodoList;
