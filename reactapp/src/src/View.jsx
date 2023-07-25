// import React from 'react';
// import Home from './Home';
// import { Link, useNavigate } from 'react-router-dom';

// function View() {
//   return (
// <div>
//       <div class="homebutton">
//       <Link to="/Home">&#8592;Back</Link>
// </div>
//       <table className='gen'>
//         <div className="container12">
//           <thead>
//             <tr className="form-title">
//             <th className="header-cell">Task ID</th>
//             <th className="header-cell">Task Type</th>
//               <th className="header-cell">Task Name</th>
//               <th className="header-cell">Task Description</th>
//               <th className="header-cell">Category</th>
//               <th className="header-cell">Status</th>
//               <th className="header-cell">Start Date</th>
//               <th className="header-cell">End Date</th>
//               <th className="header-cell">Priority</th>
//               <th className="header-cell">Notification</th>
//             </tr>
//           </thead>
//           <tbody>
//           </tbody>
//         </div>
//       </table>
//     </div>
//   );
// }

// export default View;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function View() {
//   const [taskData, setTaskData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://127.0.0.1:8181/get')
//       .then((response) => {
//         setTaskData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="homebutton">
//         <Link to="/Home">&#8592;Back</Link>
//       </div>
//       <table className="gen">
//       <div className="container12">
//         <thead>
//           <tr className="form-title">
//             <th className="header-cell">Task ID</th>
//             <th className="header-cell">Task Type</th>
//             <th className="header-cell">Task Name</th>
//             <th className="header-cell">Task Description</th>
//             <th className="header-cell">Category</th>
//             <th className="header-cell">Status</th>
//             <th className="header-cell">Start Date</th>
//             <th className="header-cell">End Date</th>
//             <th className="header-cell">Priority</th>
//             <th className="header-cell">Notification</th>
//           </tr>
//         </thead>
//         <tbody>
//           {taskData.map((task) => (
//             <tr key={task.taskid}>
//               <td>{task.taskid}</td>
//               <td>{task.type}</td>
//               <td>{task.name}</td>
//               <td>{task.description}</td>
//               <td>{task.category}</td>
//               <td>{task.status}</td>
//               <td>{task.startdate}</td>
//               <td>{task.enddate}</td>
//               <td>{task.priority}</td>
//               <td>{task.notification}</td>
//             </tr>
//           ))}
//         </tbody>
//         </div>
//       </table>
//     </div>
//   );
// }

// export default View;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function View() {
  const [dataList, setDataList] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8181/get', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setDataList(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(dataList); // This will log the updated dataList whenever it changes.
  }, [dataList]);

  return (
    <div>
      <div className="homebutton">
        <Link to="/Home">&#8592;Back</Link>
      </div>
      <table className="gen">
        <div className="container12">
          <thead>
          <tr className="form-title">
              <th className="header-cell">Task ID</th>
              <th className="header-cell">Task Type</th>
              <th className="header-cell">Task Name</th>
              <th className="header-cell">Task Description</th>
              <th className="header-cell">Category</th>
              <th className="header-cell">Status</th>
              <th className="header-cell">Start Date</th>
              <th className="header-cell">End Date</th>
              <th className="header-cell">Priority</th>
              <th className="header-cell">Notification</th>
            </tr>          </thead>
          <tbody>
            {dataList.map((task) => (
               <tr key={task.taskid}>
               <td>{task.taskid}</td>
               <td>{task.type}</td>
               <td>{task.name}</td>
               <td>{task.description}</td>
               <td>{task.category}</td>
               <td>{task.status}</td>
               <td>{task.startdate}</td>
               <td>{task.enddate}</td>
               <td>{task.priority}</td>
               <td>{task.notification}</td>
             </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;
