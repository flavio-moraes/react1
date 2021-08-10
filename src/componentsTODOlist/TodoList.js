import { useState } from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = (props) => {
    const defaultListItems = [
        {name: 'Tarefa 1', isCompleted: false},
        {name: 'Tarefa 2', isCompleted: false},
        {name: 'Tarefa 3', isCompleted: false},
        {name: 'Tarefa 4', isCompleted: false}
      ];
    const [items, setItems] = useState(defaultListItems);
    const [taskValue, setTaskValue] = useState('');
    const handleTaskSubmit = (event) => {
        event.preventDefault();
        if (items.find(i => i.name === taskValue)) return;
        setItems([...items, {name: taskValue, isCompleted: false}]);
        setTaskValue('');
    }
    const handleOnTaskChanged = (event, item) => {
        console.log(event)
        setItems(items.map(i => {
            if (i.name === item.name) {
                return {
                    ...i,
                    isCompleted: event.target.checked
                }
            }

            return i;
        }))
    }

    return (
    <div className="todo-list-container">
        <p>Você concluiu um total de {items.filter(i => i.isCompleted).length} tarefas</p>
        <form onSubmit={handleTaskSubmit}>
            <input 
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={taskValue}
                onChange={(event) => setTaskValue(event.target.value)}    
            />
            <button type="submit">Adicionar tarefa</button>
        </form>
        <ul>
            {items.map((item) => <TodoListItem item={item} onTaskChanged={handleOnTaskChanged} />)}
        </ul>   
    </div>

    );
};