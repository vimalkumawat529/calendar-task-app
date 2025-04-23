import React from "react";
import { useDrag } from "react-dnd";

const Task = ({ task }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "TASK",
        item: task,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={dragRef}
            className="task"
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
            }}
        >
            {task?.title}
        </div >
    );
};

const TaskList = ({ tasks }) => {
    return (
        <div className="task-list">
            <h3>Task List</h3>
            {tasks?.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
