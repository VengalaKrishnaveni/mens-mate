import {Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/chatPage"><h1>Chat</h1></Link>
        </div>
    );
    }

export default Home;