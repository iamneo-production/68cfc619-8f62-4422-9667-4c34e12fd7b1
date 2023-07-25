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
import React, { useState, useEffect } from 'react';
import './Task.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Deleteu() {
  const [taskDeleted, setTaskDeleted] = useState(false);

  const handleDeleteTask = (e) => {
    e.preventDefault();

    const id = e.target.elements.taskName.value;
    const token = localStorage.getItem('token');

    axios
      .delete(`http://127.0.0.1:8181/api/v1/demo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTaskDeleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="homebutton">
        <Link to="/Adminhome">&#8592;Back</Link>
      </div>
      <div className="gen">
        <div className="container1">
          <h1 className="form-title">Delete A User</h1>
          <form onSubmit={handleDeleteTask}>
            <div className="task-details-box">
              <div className="task-input-box2">
                <label htmlFor="taskid">Enter User ID To Delete</label>
                <input type="number" id="taskName" name="taskName" placeholder="Task ID" required />
              </div>
            </div>
            <div className="form-submit-btn">
              <input type="submit" value="Delete" />
            </div>
            {taskDeleted && (
              <div className="success-message">
                <span className="tick-symbol">&#10004;</span>
                <h5 className="success">User Deleted Successfully!</h5>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Deleteu;
