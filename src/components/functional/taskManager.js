import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import TaskDisplay from '../presentational/taskDisplay';

const TaskManager = () => {
  const [pageNum, setPageNum] = useState(1);
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);

  const handleTaskSelect = (task) => {
    setSelectedTask(task)
  }

  // Populate Task List
  const populateTaskList = () => taskList.map(task => (
    <button type="button" key={task.id} className="bare-btn" onClick={() => handleTaskSelect(task)}>
      <TaskDisplay task={task} />
    </button>
  ));
  
  useEffect(() => {
    setTaskList([
      { id: 1, name: 'Wake up Reminder', desc: 'Just a reminder alarm for early mornings', reminder_alert_start: 5, reminder_alert_repeat: 5 }
    ])
  },[]);
  return (
    <div>
      <section>
        {selectedTask.name}
      </section>
      <section>
        {populateTaskList()}
      </section>
    </div>
  )
}

export default TaskManager;

/* Task Object Structure
const task = 
{
  id: 1
  name: 'Wake up Reminder',
  desc: 'Just a reminder alarm for early mornings',
  start_time: dateTime,
  reminder_alert_start: 5, // Reminder alert happens 5 minutes before event start time
  reminder_alert_repeat: 5, // Reminder alert repeats every 5 minutes
}
*/