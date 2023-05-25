import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Button } from "@mui/material";
import "./TodoItem.css";

export function TodoItem({
  // Receive all object values and functions from TodoList
  id,
  taskTitle,
  taskDate,
  taskDescription,
  taskCompleted,
  taskExpand,
  completedTodo,
  toggleDetail,
  deleteTodo,
}) {
  return (
    <li
      style={taskExpand ? { height: "100px" } : { height: "50px" }}
      className={"list"}
      // key={id}
    >
      <div className="list-header">
        <label style={taskCompleted ? { textDecoration: "line-through" } : {}}>
          <input
            type="checkbox"
            checked={taskCompleted}
            onChange={(e) => completedTodo(id, e.target.checked)}
          />{" "}
          {taskTitle}
        </label>
        <div
          className="detail-button"
          onClick={() => toggleDetail(id, taskExpand)}
        >
          <MenuRoundedIcon />
        </div>
      </div>
      <Button variant="contained" color="error" onClick={() => deleteTodo(id)}>
        Delete
      </Button>
      <div className="detail">
        <div>Date: {taskDate}</div>
        <div>Description: {taskDescription}</div>
      </div>
    </li>
  );
}
