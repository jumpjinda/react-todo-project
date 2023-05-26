import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TodoForm.css";

export function TodoForm({ addTodo }) {
  // Receive addTodo function from App.jsx

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("en-US"));
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (title === "") return;

    // Call function from App.jsx and pass argument in it
    addTodo(title, date, description, category);

    setTitle("");
    setDate(new Date().toLocaleDateString("en-US"));
    setDescription("");
    setCategory("");
  }
  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <div className="title-container">
        <h2>Title</h2>
        <TextField
          id="title"
          variant="outlined"
          placeholder="title"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="date-container">
        <label htmlFor="date">
          <h2>Date</h2>
        </label>
        <DatePicker
          id="date-picker"
          placeholderText="select date"
          value={date}
          onChange={(date) =>
            setDate(new Date(date).toLocaleDateString("en-US"))
          }
          required
        />
      </div>
      <div className="description-container">
        <label htmlFor="description">
          <h2>Description (optional)</h2>
        </label>
        <TextField
          id="description"
          variant="outlined"
          placeholder="description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="category-container">
        <label>
          <h2>Category</h2>
        </label>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"home"}>Home</MenuItem>
            <MenuItem value={"work"}>Work</MenuItem>
            <MenuItem value={"etc."}>Etc.</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="button-container">
        <Button variant="contained" onClick={handleFormSubmit}>
          Add Task
        </Button>
      </div>
    </form>
  );
}
