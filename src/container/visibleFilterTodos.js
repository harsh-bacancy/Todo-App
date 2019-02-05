import { connect } from 'react-redux'
import VisibilityFilter from '../component/VisibilityFilter'
import { visibilityActive, visibilityAll, visibilityCompleted } from '../action'

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter
})
const mapDispatchToProps = (dispatch) => ({
    visibilityActive: text => dispatch(visibilityActive(text)),
    visibilityCompleted: text => dispatch(visibilityCompleted(text)),
    visibilityAll: text => dispatch(visibilityAll(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter)