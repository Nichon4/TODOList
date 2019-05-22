import React from 'react';
import {connect} from "react-redux";
import {addTask, editTask} from "../store/reducers";
import {AddTask, StyledContainer} from "../layouts/index";
import {TodoList} from "./todo-list";
import PriorityFilter from "./priority-filter"
import {uniqueId} from "../data/helpers";

const mapStateToProps = ({tasks,status}) => ({tasks, status });

const mapDispatchToProps = (dispatch) => ({
  addTask: (payload) => dispatch(addTask(payload)),
  editTask: (payload) => dispatch(editTask(payload)),
});

const storeEnhancer = connect(mapStateToProps, mapDispatchToProps);



class TodoContainer extends React.Component {



  handleAddTask() {
    const newId = uniqueId();
    const newTask = {
      id: newId,
      header: 'new task',
      createDate: new Date().toISOString().slice(0,16),
      completed: false,
      priority: this.props.status.priorityFilter ?
        this.props.status.priorityFilter : "low"
    };
    this.props.addTask(newTask);
  }

  componentDidMount() {

  }

  render() {
    return(
      <StyledContainer>
            <AddTask onClick={() => this.handleAddTask()}>AddTask</AddTask>
        <PriorityFilter/>
        <TodoList tasks={this.props.tasks}
                  priorityFilter={this.props.status.priorityFilter}/>
      </StyledContainer>
    );
  }
}

export default storeEnhancer(TodoContainer);