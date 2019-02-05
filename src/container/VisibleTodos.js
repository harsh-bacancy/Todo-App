import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { toggleTodo, visibilityAll, visibilityActive, visibilityCompleted } from '../action'

const mapStateToProps = (state) => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
})
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    visibilityActive: text => dispatch(visibilityActive(text)),
    visibilityCompleted: text => dispatch(visibilityCompleted(text)),
    visibilityAll: text => dispatch(visibilityAll(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)