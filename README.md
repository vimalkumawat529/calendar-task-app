
# **Task Scheduler with Drag and Drop Functionality**

## **Features**

- Display a calendar with selectable dates.
- Show a task list beside the calendar.
- Enable drag-and-drop functionality to allow users to drag a task and drop it on a specific date in the calendar.
- Once dropped, display the task on that date in the calendar.
- Entire interaction is handled locally.

---

## **Technologies Used**

- **ReactJS**
- **React-DnD**: A drag-and-drop library.
- **CSS**: Used for styling the components.

---

## **Installation**

Follow the steps below to set up the project locally:

### **Step 1**: Clone the repository

```bash
git clone https://github.com/vimalkumawat529/calendar-task-app.git
cd <project-directory>
```

### **Step 2**: Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### **Step 3**: Start the Application

To run the application locally, use the following command:

```bash
npm start
```

This will start the application on [http://localhost:3000](http://localhost:3000).

---

## **How to Use**

1. **Launch the Application**: Once the app is running, navigate to `http://localhost:3000` in your browser.
2. **Interact with the App**: Drag and drop tasks from the task list into the calendar's specific dates to schedule them.

---

## **Project Structure**

Here’s an overview of the project directory structure:

```
/src
  /components
    Calendar.js        # Main component for the calendar.
    TaskList.js        # Component for the task list.
  App.js               # Main app component that renders everything.
  index.js             # Entry point for the React application.
  App.css              # Global styling for the app.
```
