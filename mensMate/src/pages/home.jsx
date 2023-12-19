import { Link } from 'react-router-dom';
import homeMainImg from './home-main-img.png';
import h1Img from './h1.png';
import h2Img from './h2.png';
import h3Img from './h3.png';
import logo from './logo.png';
import girl1 from './girl1.png'; // Import your images here
import girl2 from './girl2.png';
import girl3 from './girl3.png';
import girl4 from './girl4.png';
import '../Templates/home.css';
import '../Templates/home.css';



const Card = ({ title, content, imgSrc }) => {
    return (
      <div className="card">
        <img src={imgSrc} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{content}</p>
        </div>
      </div>
    );
  };

const Home = () => {
    return (
        <div>
            {/* <div className="nav-bar">
                <h1>Home</h1>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/chatPage"><h1>Chat</h1></Link>
            </div> */}


        <div className="nav-bar">
            <div className="nav-start">
                <img className="logo" src={logo} alt="logo" width="50px" />
                <h2 className="nav-name">MENSEMATE</h2>
            </div>

            <div className="nav-end-menu">
                <Link to="/login" className='nav-login'>Login</Link>
                <Link to="/signup" className='nav-signUp'>SignUp</Link>
                <Link to="/chatPage" className='nav-chat'>Chat</Link>
            </div>
        </div>


            <div className="image-container">
                <img className="img-class" src={homeMainImg} alt="community logo" />
                <div className="overlay-div"><center>MENSEMATE  Menstrual Health Chatbot</center></div>
                <img className='h3Img' src={h3Img} />
                <div className="overlay-div2">Chat Your Way to Better Menstrual Health — MenseMate, Your Personal Health Assisstant</div>
            </div>

            <div className="cards-container">
                <Card 
                title="Personalized Menstrual Guidance" 
                content="Discover tailored advice for your menstrual health. Our chatbot listens to your unique concerns and offers insights, whether you're dealing with PCOS, tracking your cycle, or just need someone to talk to. Empathy meets AI for your wellness journey." 
                imgSrc={girl4} 
                />

                <Card
                title="Your Health, Our Priority"
                content="Your menstrual health is more than a calendar event. It's about how you feel, day in and day out. MenseMate is here to support your health with conversation that cares—because every day of your cycle matters."
                imgSrc={girl3}
                />

                <Card
                title="Menstrual Health Awareness"
                content="Breaking the silence around periods, MenseMate champions menstrual health education. Understand your body's rhythms and embrace menstrual well-being with confidence and support."
                imgSrc={girl2}
                />

                

                <Card
                title="Conversations that Grow with You"
                content="As you converse, MenseMate learns, ensuring that each piece of advice is more in tune with your needs. Share your journey, and find a chatbot that adapts to provide better, more personalized support."
                imgSrc={girl1}
                />
            {/* Repeat for other cards */}
        </div>
        </div>
    );
}

export default Home;