import React from 'react';
import propTypes from 'prop-types';

const TaskDisplay = ({ task }) => {

  return (
    <div>
      <h4>{task.name}</h4>
      <p>{task.desc}</p>
      <h6>{task.start_time}</h6>
      <h6>{task.reminder_alert_start} minutes before</h6>
      <h6>Repeats every {task.reminder_alert_repeat} minutes</h6>
    </div>
  );
}

TaskDisplay.propTypes = {
  task: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    desc: propTypes.string,
    start_time: propTypes.string,
    reminder_alert_start: propTypes.number,
    reminder_alert_repeat: propTypes.number,
  }).isRequired,
}

export default TaskDisplay;
