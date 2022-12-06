import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Column from "./Column";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  display: flex;
`;

const onDragEnd = () => {
  
}

const Board = ({ cards }) => {
  console.log('cards no board', cards);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => ( 
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {cards.columnOrder.map((columnId, index) => {
              const column = cards.columns[columnId];
              const tasks = column.taskIds.map(
                (taskIds) => cards.tasks.filter(({ id }) => taskIds === id)[0]
              );
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;