
import {Routes, Route, Link} from 'react-router-dom';
import ChatPage1 from './pages/chatPage.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';

const App = () => {



  return (
   <>
     <Routes>
    <Route path="/chatPage" element={<ChatPage1 />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
   </>
  )
};

export default App;
