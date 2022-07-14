import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const App = () => {

  const [tasks, onDelete] =  useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30 ',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 2:30 ',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 7th at 2:30 ',
            reminder: false,
        },
        {
            id: 4,
            text: 'Programming at Office',
            day: 'Feb 8th at 2:30 ',
            reminder: true,
        }
    ]
)

//Delete Task
const deleteTask = (id) => {
  console.log('Delete', id)
}


  return (
    <div className="container">
<Header/>
<Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}


export default App;
