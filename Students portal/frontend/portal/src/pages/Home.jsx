import '../assets/css/home.css'; // Import CSS file for styling
import CustomNavBar from '../components/CustomNavBar';
import SendIcon from '@rsuite/icons/Send'
import PeopleBranchIcon from '@rsuite/icons/PeopleBranch';
import PublicOpinionIcon from '@rsuite/icons/PublicOpinion';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="homepage_home">
      {/* Custom Navbar */}
      <CustomNavBar/>
      {/* Hero Banner */}
      <div className="hero-banner_home">
        <div className="hero-content_home">
          <h1 className="headline_home"> Level Up Your Learning: Dive into Resources and Tools <br/></h1>
          <h2 className="subheadline_home"> Discover exciting ways to boost your knowledge and skills.</h2>
         </div>
      </div>
      <div className="hero-banner_home">
        <div className="hero-content_home">
          <h1 className="headline_home"> Procrastination Station? Nah, Productivity Powerhouse!<br/></h1>
          <h2 className="subheadline_home">   Get organized, stay informed, and ace your courses with ease..</h2>
        <Link to='/course'>  <button className="cta-button_home">Get Started Today</button></Link>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="key-features_home">
        <div className="feature-card_home">
           <h3 className="feature-heading_home"><h3><SendIcon/></h3>Easy Enquiries</h3>
          <p className="feature-description_home">Submit & Track Enquiries with Ease.</p>
        </div>
        <div className="feature-card_home">
          <h3><PeopleBranchIcon/></h3>
           <h3>Interactive Lessons</h3>
          <p>Engage with immersive learning experiences.</p>
        </div>
        <div className="feature-card_home">
          <h3><PublicOpinionIcon/></h3>          <h3>Personalized Feedback</h3>
          <p>Receive tailored feedback to enhance your skills.</p>
        </div>
        {/* Other feature cards */}
      </div>

      {/* Success Stories Section */}
      <div className="success-stories_home">
        {/* Testimonials */}
      </div>

      {/* Call to Action */}
      <div className="call-to-action_home">
        <button className="register-button_home">Register Now</button>
      </div>
    </div>
  );
}

export default HomePage;
