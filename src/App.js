import React, { useState } from "react";
import TaskList from "./components/TaskList";
import Calendar from "./components/Calendar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialTasks = [
  { id: 1, title: "Task-1" },
  { id: 2, title: "Task-2" },
  { id: 3, title: "Task-3" },
  { id: 4, title: "Task-4" },
  { id: 5, title: "Task-5" },
];

const App = () => {
  const [assignedTasks, setAssignedTasks] = useState({});

  const today = new Date().toISOString().split('T')[0];

  const handleDropTask = (date, task) => {
    setAssignedTasks((prev) => {
      const existingTasks = prev[date] || [];
      const taskAlreadyAssigned = existingTasks.some((t) => t.id === task.id);
      if (!taskAlreadyAssigned) {
        return {
          ...prev,
          [date]: [...existingTasks, task],
        };
      }
      return prev;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <TaskList tasks={initialTasks} />
        <Calendar
          assignedTasks={assignedTasks}
          onDropTask={handleDropTask}
          today={today}
        />
      </div>
    </DndProvider>
  );
};

export default App;
