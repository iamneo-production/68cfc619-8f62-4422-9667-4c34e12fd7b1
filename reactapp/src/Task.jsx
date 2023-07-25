// import React, { useState } from 'react';
// import './Task.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Home from './Home';
// function Task() {
//   const [taskCreated, setTaskCreated] = useState(false);

//   const handleCreateTask = (e) => {
//     e.preventDefault();
//     setTaskCreated(true);
//   };

//   return (
//     <div>
//       <div class="homebutton">
//       <Link to="/Home">&#8592;Back</Link>
// </div>
//     <div className='gen'>
//       <div className="container1">
//         <h1 className="form-title">TASK CREATION</h1>
//         <form onSubmit={handleCreateTask}>
//           <div className="task-details-box">
//            <div className="task-input-box">
//               <label htmlFor="taskid">Task ID</label>
//               <input type="number" id="taskName" name="taskName" placeholder="Enter Task ID" required />
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="remainder">Task Type</label>
//               <select id="remainder" name="remainder" required>
//                 <option value="">Select Type</option>
//                 <option value="on">Individual</option>
//                 <option value="off">Team</option>
//               </select>
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="taskName">Task Name</label>
//               <input type="text" id="taskName" name="taskName" placeholder="Enter Task Name" required />
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="description">Description</label>
//               <textarea id="description" name="description" placeholder="Enter Description" required></textarea>
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="category">Category</label>
//               <select id="category" name="category" required>
//                 <option value="">Select Category</option>
//                 <option value="study plan">Study Plan</option>
//                 <option value="menstruation">Menstruation</option>
//                 <option value="fitness">Fitness</option>
//                 <option value="health">Health</option>
//                 <option value="entertainment">Entertainment</option>
//                 <option value="entertainment">Other</option>
//               </select>
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="status">Status</label>
//               <select id="status" name="status" required>
//                 <option value="">Select Status</option>
//                 <option value="started">Started</option>
//                 <option value="inprogress">In Progress</option>
//                 <option value="notstarted">Not Started</option>
//               </select>
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="startDate">Start Date</label>
//               <input type="date" id="startDate" name="startDate" required/>
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="endDate">End Date</label>
//               <input type="date" id="endDate" name="endDate" required />
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="priority">Priority</label>
//               <select id="priority" name="priority" required>
//                 <option value="">Select Priority</option>
//                 <option value="urgent">Urgent</option>
//                 <option value="anytime-soon">Anytime Soon</option>
//                 <option value="anytime">Anytime</option>
//               </select>
//             </div>
//             <div className="task-input-box">
//               <label htmlFor="remainder">Notification</label>
//               <select id="remainder" name="remainder" required>
//                 <option value="">Select Notification</option>
//                 <option value="on">On</option>
//                 <option value="off">Off</option>
//               </select>
//             </div>
//           </div>
//           <div className="form-submit-btn">
//             <input type="submit" value="Create" />
//           </div>
//           {taskCreated && (
//             <div className="success-message">
//               <span className="tick-symbol">&#10004;</span>
//               <h5 className='success'>Task Created Successfully!</h5>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Task;
import React, { useState } from 'react';
import './Task.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Task() {
  const [taskCreated, setTaskCreated] = useState(false);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    // Check if the token is available and valid
    if (!token) {
      console.log('No token found. Redirect to login page or handle the error.');
      return;
    }

    const taskData = {
      taskid: e.target.elements.taskid.value,
      type: e.target.elements.remainder.value === 'on' ? 'individual' : 'team',
      name: e.target.elements.taskName.value,
      description: e.target.elements.description.value,
      category: e.target.elements.category.value,
      status: e.target.elements.status.value,
      startdate: e.target.elements.startDate.value,
      enddate: e.target.elements.endDate.value,
      priority: e.target.elements.priority.value,
      notification: e.target.elements.notification.value,
    };

    try {
      await axios.post('http://localhost:8181/post', taskData, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the request headers
        },
      });

      setTaskCreated(true);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately, such as showing an error message to the user
    }
  };

  return (
    <div>
      <div class="homebutton">
        <Link to="/Home">&#8592;Back</Link>
      </div>
      <div className='gen'>
        <div className="container1">
          <h1 className="form-title">TASK CREATION</h1>
          <form onSubmit={handleCreateTask}>
            <div className="task-details-box">
              <div className="task-input-box">
                <label htmlFor="taskid">Task ID</label>
                <input type="number" id="taskid" name="taskid" placeholder="Enter Task ID" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="remainder">Task Type</label>
                <select id="remainder" name="remainder" required>
                  <option value="">Select Type</option>
                  <option value="on">Individual</option>
                  <option value="off">Team</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="taskName">Task Name</label>
                <input type="text" id="taskName" name="taskName" placeholder="Enter Task Name" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" placeholder="Enter Description" required></textarea>
              </div>
              <div className="task-input-box">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" required>
                  <option value="">Select Category</option>
                  <option value="study plan">Study Plan</option>
                  <option value="menstruation">Menstruation</option>
                  <option value="fitness">Fitness</option>
                  <option value="health">Health</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" required>
                  <option value="">Select Status</option>
                  <option value="started">Started</option>
                  <option value="inprogress">In Progress</option>
                  <option value="notstarted">Not Started</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="endDate">End Date</label>
                <input type="date" id="endDate" name="endDate" required />
              </div>
              <div className="task-input-box">
                <label htmlFor="priority">Priority</label>
                <select id="priority" name="priority" required>
                  <option value="">Select Priority</option>
                  <option value="urgent">Urgent</option>
                  <option value="anytime-soon">Anytime Soon</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              <div className="task-input-box">
                <label htmlFor="notification">Notification</label>
                <select id="notification" name="notification" required>
                  <option value="">Select Notification</option>
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </div>
            </div>
            <div className="form-submit-btn">
              <input type="submit" value="Create" />
            </div>
          </form>
          {taskCreated && (
            <div className="success-message5">
              <span className="tick-symbol">&#10004;</span>
              <h5 className='success'>Task Created Successfully!</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
