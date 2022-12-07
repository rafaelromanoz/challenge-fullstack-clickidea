import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Column from "./Column";
import api from "../../services/api";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import toast, { Toaster } from "react-hot-toast";

const token = localStorage.getItem('token');

const Container = styled.div`
  display: flex;
`;

const Board = () => {
  const initialData = {
    tasks: [{
      title: 'Coloque um titulo',
      content: 'Coloque um conteúdo',
      list: 'column1'
    }], columns: {
     
    }, columnOrder: [
    
  ]}
  const [state, setState] = useState(initialData);

  const fetchData = useCallback(async () => {
    const { data } = await api.get('/cards/', {
      headers: {
        authorization: token,
      },
    });
    setState(mountObjectToMakeBoard(data));
  }, []);

  useEffect(() => {
    fetchData().catch((error) => console.error(error));
  }, [fetchData]);

  const mountObjectToMakeBoard = (data) => {
    const mountedCards = {
      columns: {
        column1: {
          id: 'column1',
          title: 'To do',
          taskIds: [],
        },
        column2: {
          id: 'column2',
          title: 'Done',
          taskIds: [],
        },
        column3: {
          id: 'column3',
          title: 'Doing',
          taskIds: [],
        },
      },
      tasks: [],
      columnOrder: ['column1', 'column2', 'column3'],
    };
    data.forEach((card) => {
      if (card.list === 'column1') {
        mountedCards.columns.column1.taskIds.push(card.id);
      } else if (card.list === 'column2') {
        mountedCards.columns.column2.taskIds.push(card.id);
      } else {
        mountedCards.columns.column3.taskIds.push(card.id);
      }
    });
    mountedCards.tasks = data;
    return mountedCards;
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setState({
        ...state,
        columnOrder: newColumnOrder,
      });
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setState({
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setState({
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  }
 
  if (Object.keys(state.tasks).length === 0) {
    return toast.loading('Ainda não possui cards');
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => ( 
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {state.columnOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map(
                (taskIds) => state.tasks.filter(({ id }) => taskIds === id)[0]
              );
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  index={index}
                  board={state}
                  setBoard={setState}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
      <Toaster />
    </DragDropContext>
  );
}

export default Board;