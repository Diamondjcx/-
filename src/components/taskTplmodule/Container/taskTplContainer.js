import React, { PropTypes, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "rect-redux";

import * as actions from "../action/studyMapAction";

import TaskTplTable from "../components/TaskTplTable";

class TaskTplView extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount() {

    }

    constuctor(props, context) {
        super(props, context);
    }
    
    render() {
        return <TaskTplTable />
    }

    
}
const mapStateToProps = (state) => {
    return {
        ...state.taskTplReducer
    };
}

const mapDispatchToProps = (dispatch) =>{
    return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTplView);