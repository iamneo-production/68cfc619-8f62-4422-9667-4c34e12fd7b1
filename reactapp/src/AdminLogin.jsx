// import React, { useState } from 'react';
// import './Login.css';
// import { Link, useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       setEmailError('Please enter a valid email address');
//       return false;
//     } else {
//       setEmailError('');
//       return true;
//     }
//   };

//   const validatePassword = (password) => {
//     if (password.length < 8 || password.length > 16) {
//       setPasswordError('Must be 8-16 characters long');
//       return false;
//     } else if (!/[A-Z]/.test(password)) {
//       setPasswordError('Must contain at least one uppercase letter');
//       return false;
//     } else if (!/\d.*\d/.test(password)) {
//       setPasswordError('Must contain at least two numbers');
//       return false;
//     } else if (!/[!@#$%^&*()]/.test(password)) {
//       setPasswordError('Must contain at least one special character');
//       return false;
//     } else {
//       setPasswordError('');
//       return true;
//     }
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     const emailValue = e.target.value;
//     setEmail(emailValue);
//     validateEmail(emailValue);
//   };

//   const handlePasswordChange = (e) => {
//     const passwordValue = e.target.value;
//     setPassword(passwordValue);
//     validatePassword(passwordValue);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent form submission

//     // Validate username, email, and password fields
//     if (!username || !email || !password) {
//       setErrorMessage('Please fill in all the required fields');
//       return;
//     }

//     // Redirect to the next home page
//     navigate('/Home');
//   };

//   return (
//     <div className="container">
//       <div className="forms-container">
//         <div className="signin-signup">
//           <form action="#" className="sign-in-form" onSubmit={handleLogin}>
//             <h2 className="title">Sign in</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} required />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-envelope"></i>
//               <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
//             </div>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <Link to="/Adminhome"><button type="submit" className="butt">
//               Login
//             </button></Link>
//           </form>
//         </div>
//       </div>

//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>Welcome, Admin!</h3>
//             <p>Sign in to access the admin dashboard and manage the system.</p>
//             <Link to="/First">
//               <button className="btn transparent" id="sign-up-btn">
//                 Home
//               </button>
//             </Link>
//           </div>
//           <img
//             src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-4517376-3742807.png"
//             className="image"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from 'react';
import './Login.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('USER');
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8 || password.length > 16) {
      setPasswordError('Must be 8-16 characters long');
      return false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('Must contain at least one uppercase letter');
      return false;
    } else if (!/\d.*\d/.test(password)) {
      setPasswordError('Must contain at least two numbers');
      return false;
    } else if (!/[!@#$%^&*()]/.test(password)) {
      setPasswordError('Must contain at least one special character');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSignUpClick = () => {
    setIsSignUpMode(true); // Set the isSignUpMode state to true to switch to sign-up mode
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false); // Set the isSignUpMode state to false to switch to sign-in mode
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validatePassword(passwordValue);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all the required fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        email,
        password,
      });
      

      if (response.status === 200) {
        setErrorMessage('');
        navigate('/Adminhome');
        let token = response.data.token;
        let user = response.data.userResponse;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(user));
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const isEmailValid = email && !emailError;
    const isPasswordValid = password && !passwordError;

    if (isEmailValid && isPasswordValid) {
      const registrationData = {
        name,
        email,
        password,
        role,
      };

      try {
        const response = await fetch('http://localhost:8181/api/v1/auth/register', {
           method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });

        if (response.ok) {
          setErrorMessage('');
          navigate('/Adminhome'); // Redirect to the home page upon successful registration
        } else {
          setErrorMessage('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setErrorMessage('Registration failed. Please try again.');
      }
    } else {
      setErrorMessage('Please fill in all the required fields');
    }
  };
  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>

        <div className="forms-container">
          <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleLogin}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="butt">
                Login
              </button>
            </form>
           
          </div>
        </div>
        <div className="panels-container">
        <div className="panel left-panel">
            <div className="content">
              <h3>Welcome Admin!</h3>
              <p>Sign in to access the admin dashboard and manage the system.</p>
              <Link to="/First">
<button className="btn transparent" id="sign-up-btn">Home</button></Link>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-4517376-3742807.png"
              className="image"
              alt=""
            />
          </div>
           </div>
      </div>
    );
  };
  
  export default AdminLogin;