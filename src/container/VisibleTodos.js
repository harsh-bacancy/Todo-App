import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { toggleTodo } from '../action'

const mapStateToProps = (state) => ({
    todos: state.todos,
    visibiltyFilter: state.visibiltyFilter
})
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)