import '../assets/css/courses.css'; // Import CSS file for styling
import ielts from "../assets/images/ielts.jpg"
import toefl from "../assets/images/toefl.gif"
import eot from "../assets/images/eot.jpg"
import literature from "../assets/images/literature.webp"
import creative from "../assets/images/creative.jpg"
import medical from "../assets/images/medical.jpg"
import business from "../assets/images/business.jpg"
import legal from "../assets/images/legal.jpg"
import begin from "../assets/images/begin.png"
import inter from "../assets/images/inter.png"
import master from "../assets/images/master.jpg"
import CustomNavBar from '../components/CustomNavBar';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  return (
    <div className="courses-page_course">
      {/* Hero Banner */}
      <CustomNavBar/>
      <div className="hero-banner_course">
        <h1 className="headline_course">Select Your Course: <br/></h1>
      </div>

      {/* Course Categories */}
      <div className="course-categories_course">
        {/* General English */}
        <div className="category_course">
          <h2 className="category-title_course"></h2>
          {/* Courses */}
          <div className="course_course">
            <img src={begin} alt="General English Thumbnail" />
            <div className="course-details_course">
              <h3>Programming and Web Development:</h3>
              <p>"Web Developer Bootcamp"
"CS50's Introduction to Computer Science" 
"Python for Everybody" </p>
<Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
          <div className="course_course">
            <img src={inter} alt="General English Thumbnail" />
            <div className="course-details_course">
              <h3>Data Science and Machine Learning:</h3>
              <p>Machine Learning" by Andrew
"Data Science MicroMasters Program"
"Applied Data Science with Python".</p>
<Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
        
        </div>

        {/* Professional English */}
        <div className="category_course">
          <h2 className="category-title_course"></h2>
          {/* Courses */}
          <div className="course_course">
            <img src={business} alt="Professional English Thumbnail" />
            <div className="course-details_course">
              <h3>Business and Marketing:</h3>
              <p>"Digital Marketing Specialization" 
"Financial Markets" 
"Business Foundations Specialization" </p>
<Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
          <div className="course_course">
            <img src={legal} alt="Professional English Thumbnail" />
            <div className="course-details_course">
              <h3>Graphic Design and Creative Arts:</h3>
              <p>"Graphic Design Specialization" 
"Photoshop CC 2022 MasterClass" 
"Introduction to Graphic Design".</p>
<Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
          
          
        </div>

        {/* Exam Preparation */}
        <div className="category_course">
          <h2 className="category-title_course"></h2>
          {/* Courses */}
          <div className="course_course">
            <img src={ielts} alt="Exam Preparation Thumbnail" />
            <div className="course-details_course">
              <h3>IELTS Test Prep</h3>
              <p>Confidently tackle the International English Language Testing System.</p>
              <Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
          <div className="course_course">
            <img src={toefl} alt="Exam Preparation Thumbnail" />
            <div className="course-details_course">
              <h3>TOEFL iBT Exam Preparation</h3>
              <p>Master the Test of English as a Foreign Language.</p>
              <Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
        </div>

        {/* Special Interest */}
        <div className="category_course">
          <h2 className="category-title_course"></h2>
          {/* Courses */}
          <div className="course_course">
            <img src={eot} alt="Special Interest Thumbnail" />
            <div className="course-details_course">
              <h3>IT and Networking:</h3>
              <p>"Cisco CCNA"
"AWS Certified Solutions Architect" 
"Google IT Support Professional Certificate"</p>
<Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
          <div className="course_course">
            <img src={literature} alt="Special Interest Thumbnail" />
            <div className="course-details_course">
              <h3>Health and Fitness:</h3>
              <p>Nutrition and Wellness"
"Yoga for the Inflexible"
"The Science of Exercise"</p>
<Link to="/payment"> <button className="cta-button_course">APPLY</button></Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
