import {Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
        <h1>Login</h1>
        <Link to="/signup">SignUp</Link>
        <Link to="/chatPage"><h1>Chat</h1></Link>
        <Link to="/home"><h1>Home</h1></Link>
        </div>
    );
    }

export default Login;