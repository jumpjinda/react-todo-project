import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(() => {
    // Get data from local
    const localValue = localStorage.getItem("ITEMS");

    // Return empty array to useState if local does not have data
    if (localValue == null) return [];

    // Return data to useState
    return JSON.parse(localValue);
  });

  useEffect(() => {
    // Store data in local when todos has changed
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Create function to setTodos for child component and pass it as props
  // Recieve argument from TodoForm component and implement then return object value that TodoList can use
  function addTodo(title, date, description, category) {
    // setTodos in App.jsx to pass todos object to TodoList
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: currentTodos.length + 1,
          taskTitle: title,
          taskDate: date,
          taskDescription: description,
          taskCategory: category,
          taskCompleted: false,
          taskExpand: false,
        },
      ];
    });
  }

  // Pass function 2 step to TodoList to TodoItem
  function completedTodo(id, taskCompleted) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, taskCompleted };
        }
        return todo;
      });
    });
  }

  // Pass function 2 step to TodoList to TodoItem
  function toggleDetail(id, taskExpand) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, taskExpand: !taskExpand };
        }
        return todo;
      });
    });
  }

  // Pass function 2 step to TodoList to TodoItem
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList
        // Function passed
        todos={todos}
        completedTodo={completedTodo}
        toggleDetail={toggleDetail}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
