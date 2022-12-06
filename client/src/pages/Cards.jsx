import { useCallback, useEffect, useState } from "react";
import Board  from "../components/Board/Board";
import api from '../services/api';

const token = localStorage.getItem('token');

const Cards = () => {
  const [cards, setCards] = useState();

  const fetchData = useCallback(async () => {
    const { data } = await api.get('/cards/', {
      headers: {
        authorization: token,
      },
    });
    setCards(mountObjectToMakeBoard(data));
  }, []);

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
          taskIds: []
        },
      },
      tasks: [],
      columnOrder:['column1', 'column2', 'column3']
    };
    data.forEach((card) => {
      if (card.list === 'todo') {
        mountedCards.columns.column1.taskIds.push(card.id);
      } else if (card.list === 'doing') {
        mountedCards.columns.column2.taskIds.push(card.id);
      } else {
        mountedCards.columns.column3.taskIds.push(card.id);
      }
    });
    mountedCards.tasks = data;
    return mountedCards;
  }
  
  useEffect(() => {
    fetchData().catch((error) => console.error(error));
  }, [fetchData]);
  
  if (!cards) {
    return <h1>Não tem cards</h1>
  } else {
    return (
      <Board cards={cards} />
    )
  }
}

export default Cards;