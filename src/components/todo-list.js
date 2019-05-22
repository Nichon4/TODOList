import React from 'react';
import {
  StyledDate, StyledForm, StyledRow, StyledHeader,
  StyledText, TaskBlock, CompletedDate, StyledSelect
} from "../layouts/task";
import {deleteTask, editTask, finishTask, saveTask} from "../store/reducers";
import {connect} from "react-redux";
import { TaskList} from "../layouts";


const mapStateToProps = ({tasks,status}) => ({
  editTaskId: status ? status.editTaskId : false
});

const mapDispatchToProps = (dispatch) => ({
  editTask: (payload) => dispatch(editTask(payload)),
  saveTask: (payload) => dispatch(saveTask(payload)),
  deleteTask: (payload) => dispatch(deleteTask(payload)),
  finishTask: (payload) => dispatch(finishTask(payload))
});

const storeEnhancer = connect(mapStateToProps, mapDispatchToProps);

const TaskContainer = (props) => {
  const {task, editTask, editTaskId, saveTask, deleteTask, finishTask} = props;
  const readonly = editTaskId ? !(task.id === editTaskId) : true;
  const handleSave = (e) => {
    e.preventDefault();
    const {id,header,text,priority,expireDate,
      completed} = e.target;
    const newTask = {
      id: id.value,
      header: header.value,
      text: text.value,
      priority: priority.value,
      createDate: task.createDate,
      expireDate: expireDate.value,
      completed: completed.checked
    };
    saveTask(newTask);
  };
  if (readonly) {
    return (
      <TaskBlock key={task.id}>
        <StyledForm>
          <input type="hidden" name={"id"} value={task.id}/>
          <StyledHeader name={"header"}
                        readOnly={readonly}
                        defaultValue={task.header}/>
          <StyledText name={"text"} readOnly={readonly}
                      defaultValue={task.text}/>
          <StyledRow>
              <>Expire</>
            <StyledDate name={"expireDate"}
                        type="datetime-local" readOnly={readonly}
                        defaultValue={task.expireDate}/>
          </StyledRow>
          <StyledRow>
              <>priority</>
            <StyledSelect name={"priority"} disabled={readonly}
                    defaultValue={task.priority}>
              <option value="low">low</option>
              <option value="high">high</option>
              <option value="very high">very high</option>
            </StyledSelect>
          </StyledRow>
          { task.completed ?
            <CompletedDate date={task.completedDate}/> :
            <button onClick={() => finishTask(task.id)}>Finish</button>
          }

          <button onClick={() => editTask(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </StyledForm>
      </TaskBlock>
    )
  } else {
    return (
      <TaskBlock key={task.id}>
        <StyledForm onSubmit={handleSave}>
          <input type="hidden" name={"id"} value={task.id}/>
          <StyledHeader name={"header"}
                        defaultValue={task.header}/>
          <StyledText name={"text"}
                      defaultValue={task.text}/>
          <StyledRow>
              <>Created</>
            <StyledDate name={"createDate"}
                        type="datetime-local" readOnly={true}
                        defaultValue={task.createDate}/>
          </StyledRow>
          <StyledRow>
              <>expire</>
            <StyledDate name={"expireDate"}
                        type="datetime-local"
                        defaultValue={task.expireDate}/>
          </StyledRow>
          <StyledRow>
            <span>priority</span>
            <StyledSelect name={"priority"}
                    defaultValue={task.priority}>
              <option value="low">low</option>
              <option value="high">high</option>
              <option value="very high">very high</option>
            </StyledSelect>
          </StyledRow>
          <StyledRow>
            <span>completed</span>
            <input name={"completed"} type={"checkbox"}
                   defaultChecked={task.completed}/>
          </StyledRow>
          { task.completed ?
            <CompletedDate date={task.completedDate}/> :
            <button onClick={() => finishTask(task.id)}>Finish</button>
          }

          <button>Save</button>

          <button onClick={() => deleteTask(task.id)}>Delete</button>

        </StyledForm>
      </TaskBlock>
    )
  }
};

const TaskContainerConnected = storeEnhancer(TaskContainer);

export const TodoList = ({tasks, priorityFilter}) => {
  if (Object.keys(tasks).length > 0) {
    let mappedTasks;
    if (priorityFilter) {
      mappedTasks = Object.values(tasks)
        .filter((task) => task.priority === priorityFilter)
        .map((task) =>
          (<TaskContainerConnected key={task.id} task={task}/>));
    } else {
      mappedTasks = Object.values(tasks).map((task) =>
        (<TaskContainerConnected key={task.id} task={task}/>));
    }
    return (
      <TaskList>
        {mappedTasks}
      </TaskList>
    )
  }
  return (
    <span>
                no tasks
        </span>
  )
};