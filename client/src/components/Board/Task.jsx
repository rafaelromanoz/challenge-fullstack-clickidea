import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import api from "../../services/api";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;



const Task = (props) => {
  const deleteTask = async (columnId, index, taskId) => {
    const column = props.board.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(index, 1);

    const tasks = props.board.tasks;

    const { [taskId]: oldTask, ...newTasks } = tasks;
    props.setBoard({
      ...props.board,
      tasks: [...props.board.tasks, newTasks],
      columns: {
        ...props.board.columns,
        [columnId]: {
          ...column,
          taskIds: newTaskIds,
        },
      },
    });
    await api.delete(`/cards/${taskId}`);
  }

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>Titulo: {props.task.title}</h3>
          <p>Conteúdo: {props.task.content}</p>
          <button onClick={() => deleteTask(props.columnId, props.index, props.task.id)}>Deletar</button>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;