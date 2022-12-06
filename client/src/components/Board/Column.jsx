import styled from "styled-components";
import Task from "./Task";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid black;
  border-radius: 2px;
  width: 200px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

const Title = styled.div`
  padding: 5px;
`;

const TaskList = styled.div`
  padding: 8px;
`

const Column = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{props.column.title}</Title>
          <TaskList>
            {props.tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                columnId={props.column.id}
              />
            ))}
          </TaskList>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;