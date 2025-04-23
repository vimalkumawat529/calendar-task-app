import React, { useState } from "react";
import { useDrop } from "react-dnd";

const CalendarDay = ({ date, tasks, onDropTask, today, selectedDate, onSelectDate }) => {
    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "TASK",
        drop: (item) => onDropTask(date, item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const isToday = date === today;
    const isSelected = date === selectedDate;

    return (
        <div
            ref={dropRef}
            className={`calendar-day ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}`}
            style={{
                backgroundColor: isOver
                    ? "#e0f7fa"
                    : isSelected
                        ? "#c8e6c9"
                        : "white",
                border: isSelected ? "2px solid #388e3c" : "1px solid #ccc",
                cursor: "pointer",
            }}
            onClick={() => onSelectDate(date)}
        >
            <div className="date-label">{date}</div>
            {tasks?.map((task) => (
                <div key={task?.id} className="calendar-task">
                    {task?.title}
                </div>
            ))}
        </div>
    );
};

const Calendar = ({ assignedTasks, onDropTask, today }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const days = Array.from({ length: 30 }, (_, index) => {
        const date = new Date();
        date.setDate(index + 1);
        return date.toISOString().split("T")[0];
    });

    return (
        <div className="calendar">
            <h3>Calendar</h3>
            <div className="calendar-grid">
                {days?.map((date) => (
                    <CalendarDay
                        key={date}
                        date={date}
                        tasks={assignedTasks[date] || []}
                        onDropTask={onDropTask}
                        today={today}
                        selectedDate={selectedDate}
                        onSelectDate={setSelectedDate}
                    />
                ))}
            </div>
        </div>
    );
};

export default Calendar;
