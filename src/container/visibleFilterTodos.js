import { connect } from 'react-redux'
import VisibilityFilter from '../component/VisibilityFilter'
import { visibilityActive, visibilityAll, visibilityComleted } from '../action'

const mapStateToProps = (state) => ({
    visibiltyFilter: state.visibiltyFilter
})
const mapDispatchToProps = (dispatch) => ({
    visibilityActive: text => dispatch(visibilityActive(text)),
    visibilityComleted: text => dispatch(visibilityComleted(text)),
    visibilityAll: text => dispatch(visibilityAll(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter)