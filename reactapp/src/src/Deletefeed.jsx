// import React, { useState } from 'react';
// import './Task.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Home from './Home';
// function Delete() {
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
//         <h1 className="form-title">TASK DELETION</h1>
//         <form onSubmit={handleCreateTask}>
//           <div className="task-details-box">
//            <div className="task-input-box2">
//               <label htmlFor="taskid">Enter Task ID To Delete</label>
//               <input type="number" id="taskName" name="taskName" placeholder="Task ID " required />
//             </div>
//             </div>
//           <div className="form-submit-btn">
//             <input type="submit" value="Delete" />
//           </div>
//           {taskCreated && (
//             <div className="success-message">
//               <span className="tick-symbol">&#10004;</span>
//               <h5 className='success'>Task Deleted Successfully!</h5>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Delete;
import React, { useState } from 'react';
import './Task.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Deleteu() {
  const [taskDeleted, setTaskDeleted] = useState(false);

  const handleDeleteTask = async (e) => {
    e.preventDefault();

    const id = e.target.elements.taskName.value;
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`http://localhost:9005/api/v1/feed/removedetails/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the request headers
        },
      });

      setTaskDeleted(true);
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during API request
      // For example, if the token is invalid or expired, you can redirect the user to the login page
    }
  };

  return (
    <div>
      <div className="homebutton">
        <Link to="/Adminhome">&#8592;Back</Link>
      </div>
      <div className="gen">
        <div className="container1">
          <h1 className="form-title">Delete User Feedback</h1>
          <form onSubmit={handleDeleteTask}>
            <div className="task-details-box">
              <div className="task-input-box2">
                <label htmlFor="taskid">Enter Feedback ID To Delete</label>
                <input type="number" id="taskName" name="taskName" placeholder="Task ID" required />
              </div>
            </div>
            <div className="form-submit-btn">
              <input type="submit" value="Delete" />
            </div>
            {taskDeleted && (
              <div className="success-message">
                <span className="tick-symbol">&#10004;</span>
                <h5 className="success">Feedback Deleted Successfully!</h5>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Deleteu;
