import First from './First.jsx';
import Login from './Login.jsx';
import AdminLogin from './AdminLogin.jsx';
import Home from './Home.jsx';
import Feedback from './Feedback.jsx';
import About from './About.jsx';
import Task from './Task.jsx';
import Edit from './Edit.jsx';
import Delete from './Delete.jsx';
import View from './View.jsx';
import Quick from './Quick.jsx';
import Dashboard from './Dashboard.jsx';
import Calender from './Calender.jsx';
import Adminhome from './Adminhome.jsx';
import Userd from './Userd.jsx';
import Deleteu from './Deleteu.jsx';
import Deletefeed from './Deletefeed.jsx';
import Userfeed from './Userfeed.jsx';

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path='' element ={<First/>}></Route>
        <Route path='First' element ={<First/>}></Route>
        <Route path='Login' element ={<Login/>}></Route>
        <Route path='AdminLogin' element ={<AdminLogin/>}></Route>
        <Route path='Home' element ={<Home/>}></Route>
        <Route path='Feedback' element ={<Feedback/>}></Route>
        <Route path='About' element ={<About/>}></Route>
        <Route path='Task' element ={<Task/>}></Route>
        <Route path='View' element ={<View/>}></Route>
        <Route path='Edit' element ={<Edit/>}></Route>
        <Route path='Delete' element ={<Delete/>}></Route>
        <Route path='Quick' element ={<Quick/>}></Route>
        <Route path='Dashboard' element ={<Dashboard/>}></Route>
        <Route path='Calender' element ={<Calender/>}></Route>
        <Route path='Adminhome' element ={<Adminhome/>}></Route>
        <Route path='Userd' element ={<Userd/>}></Route>
        <Route path='Deleteu' element ={<Deleteu/>}></Route>
        <Route path='Deletefeed' element ={<Deletefeed/>}></Route>
        <Route path='Userfeed' element ={<Userfeed/>}></Route>

    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
