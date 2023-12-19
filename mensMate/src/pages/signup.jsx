import {Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
        <h1>SignUp</h1>
        <Link to="/login">Login</Link>
        <Link to="/chatPage"><h1>Chat</h1></Link>
        <Link to="/home"><h1>Home</h1></Link>
        </div>
    );
    }

export default SignUp;