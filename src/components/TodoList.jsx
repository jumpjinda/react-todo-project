import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export function TodoList({ todos, completedTodo, toggleDetail, deleteTodo }) {
  // Receive todos object and functions
  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <ul className="list-container">
        {/* Implement todos object*/}
        {todos.map((todo) => {
          return (
            <TodoItem
              // Pass todo from todos.map as argument to TodoItem
              // Use object destructuring instead
              {...todo}
              // id={todo.id}
              // taskTitle={todo.taskTitle}
              // taskDate={todo.taskDate}
              // taskDescription={todo.taskDescription}
              // taskCompleted={todo.taskCompleted}
              // taskExpand={todo.taskExpand}
              key={todo.id}
              // Passed functions that receive from App.jsx
              completedTodo={completedTodo}
              toggleDetail={toggleDetail}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
