import { ADD_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './ActionType'
nextId = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextId++,
    text,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const visibilityAll = (text) => ({
    type: SHOW_ALL,
    text
})

export const visibilityComleted = (text) => ({
    type: SHOW_COMPLETED,
    text
})

export const visibilityActive = (text) => ({
    type: SHOW_ACTIVE,
    text
})