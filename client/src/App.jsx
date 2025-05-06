import './App.css';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import preDefinedTodos from './assets/predefinedTodos';
import { localiser } from './locales/localeData';

function App() {
  const [newTodo, setNewTodo] = useState({ title: "", date: "" });
  const [allTodos, setAllTodos] = useState([]);

  // ✅ 从 localStorage 初始化
  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) {
      setAllTodos(JSON.parse(stored));
    } else {
      setAllTodos(preDefinedTodos);
    }
  }, []);

  // ✅ 添加任务并保存到 localStorage
  const handleCreateTodo = (event) => {
    event.preventDefault();
    const updatedTodos = [...allTodos, newTodo];
    setAllTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    alert('New Todo Saved!');
  };

  return (
    <div className="min-h-screen bg-richGreen text-gray-800 py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">My Todo Calendar</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center">Add A New Todo</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter Todo Title"
          className="w-1/4 mr-4 p-2 rounded-md text-gray-800 border border-gray-200 focus:border-gray-400 hover:border-gray-300"
          value={newTodo.title}
          onChange={(event) => setNewTodo({ ...newTodo, title: event.target.value })}
        />
        <ReactDatePicker
          placeholderText="Enter Date"
          className="mr-4 p-2 rounded-md text-gray-800 border border-gray-200 focus:border-gray-400 hover:border-gray-300"
          selected={newTodo.date}
          onChange={(date) => setNewTodo({ ...newTodo, date })}
        />
        <button
          className="px-4 py-2 rounded-md bg-gray-300 hover:bg-lightGray focus:outline-none border border-transparent"
          onClick={handleCreateTodo}
        >
          Add New Todo
        </button>
      </div>
      <Calendar
        localizer={localiser}
        events={allTodos}
        startAccessor="date"
        endAccessor="date"
        className="h-screen my-10 bg-richGreen text-black"
      />
    </div>
  );
}

export default App;
