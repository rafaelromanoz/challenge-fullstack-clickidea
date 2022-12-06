import { useState } from 'react';
import api from '../../services/api';

const AddTask = (props) => {
  const [showNewTaskButton, setShowNewTaskButton] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const sendNewTask = async (e) => {
    setShowNewTaskButton(true);
    await addNewTask(props.columnId);
  }

  const addNewTask = async (columnId) => {
    const taskToSave = {
      list: columnId,
      content,
      title
    }
    const { data } = await api.post('/cards/', taskToSave);
    const column = props.board.columns[columnId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.push(data.id);

    const newTask = {
      id: data.id,
      content,
      title
    };
    props.setBoard({
      ...props.board,
      tasks: [...props.board.tasks, newTask],
      columns: {
        ...props.board.columns,
        [columnId]: {
          ...props.board.columns[columnId],
          taskIds: newTaskIds,
        },
      },
    });
  }

  return (
    <div>
      {showNewTaskButton ? (
        <button onClick={() => setShowNewTaskButton(false)}> Nova task </button>
      ) : (
        <div>
          <label>
            Título
            <input
              type="text"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </label>
          <label>
            Conteúdo
            <input
              type="text"
              value={content}
              onChange={({ target }) => setContent(target.value)}
            />
            </label>
            <button onClick={sendNewTask}>Enviar task</button>
        </div>
      )}
    </div>
  );
}

export default AddTask;