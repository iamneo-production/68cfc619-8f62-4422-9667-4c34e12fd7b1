// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// function Userfeed() {
//   const [feedbackData, setFeedbackData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://127.0.0.1:8181/showdetails')
//       .then((response) => {
//         setFeedbackData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <div className="homebutton">
//         <Link to="/Adminhome">&#8592;Back</Link>
//       </div>
//       <table className="gen">
//         <div className="container188">
//           <thead>
//             <tr className="form-title">
//               <th className="header-cell">Feedback ID</th>
//               <th className="header-cell">First Name</th>
//               <th className="header-cell">Last Name</th>
//               <th className="header-cell">Email</th>
//               <th className="header-cell">Phone Number</th>
//               <th className="header-cell">Query</th>
//             </tr>
//           </thead>
//           <tbody>
//             {feedbackData.map((feedback) => (
//               <tr key={feedback.id}>
//                 <td>{feedback.id}</td>
//                 <td>{feedback.firstname}</td>
//                 <td>{feedback.lastname}</td>
//                 <td>{feedback.email}</td>
//                 <td>{feedback.phone}</td>
//                 <td>{feedback.query}</td>
//               </tr>
//             ))}
//           </tbody>
//         </div>
//       </table>
//     </div>
//   );
// }


// export default Userfeed;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Userfeed() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:9005/api/v1/feed/showdetails', {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setFeedbackData(response.data);
      } catch (error) {
        console.log(error);
        // Handle any errors that occur during API request
        // For example, if the token is invalid or expired, you can redirect the user to the login page
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div>
      <div className="homebutton">
        <Link to="/Adminhome">&#8592;Back</Link>
      </div>
      <table className="gen">
        <div className="container188">
          <thead>
            <tr className="form-title">
              <th className="header-cell">Feedback ID</th>
              <th className="header-cell">First Name</th>
              <th className="header-cell">Last Name</th>
              <th className="header-cell">Email</th>
              <th className="header-cell">Phone Number</th>
              <th className="header-cell">Query</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.firstname}</td>
                <td>{feedback.lastname}</td>
                <td>{feedback.email}</td>
                <td>{feedback.phone}</td>
                <td>{feedback.query}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default Userfeed;
