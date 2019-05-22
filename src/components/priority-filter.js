import React from 'react';
import {priorityFilter} from "../store/reducers";
import {connect} from "react-redux";
import {StyledPriority, StyledPriorityButton} from "../layouts/index";

const mapStateToProps = ({status}) => ({status});

const mapDispatchToProps = (dispatch) => ({
    priorityFilter: (payload) => dispatch(priorityFilter(payload))
});

const storeEnhancer = connect(mapStateToProps, mapDispatchToProps);


class PriorityFilter extends React.Component {

    render() {
        return(
            <StyledPriority>
                <StyledPriorityButton onClick={() => this.props.priorityFilter(false)}>All Tasks</StyledPriorityButton>
                <StyledPriorityButton onClick={() => this.props.priorityFilter("low")}>Low</StyledPriorityButton>
                <StyledPriorityButton onClick={() => this.props.priorityFilter("high")}>High</StyledPriorityButton>
                <StyledPriorityButton onClick={() => this.props.priorityFilter("very high")}>Very High</StyledPriorityButton>
            </StyledPriority>
        );
    }
}

export default storeEnhancer(PriorityFilter);