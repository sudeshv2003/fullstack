 import '../assets/css/profile.css';
import profile from "../assets/images/tm2.jpeg";
import CustomNavBar from '../components/CustomNavBar';
function Profile() {
  // Sample data
  const courses = [
    { id: 1, name: 'Programming and Web Development', progress: 60 },
    { id: 2, name: 'Data Science and Machine Learning', progress: 40 },
    { id: 3, name: 'Business and Marketing', progress: 75 },
    { id: 4, name: 'Graphic Design and Creative Arts', progress: 80 },
    { id: 5, name: 'IELTS Test Prep', progress: 55 },
    { id: 6, name: 'TOEFL iBL Exam Preparation', progress: 90 },
    { id: 7, name: 'IT and Networking', progress: 70 },
    { id: 8, name: 'Health and Fitness', progress: 85 },
    // Add more courses as needed
  ];
  const userData = {
    username: 'Sam',
    email: 'sam@example.com',
    age: 19,
    country: 'INDIA',
    occupation: 'Student',
    interests: ['Reading', 'Writing', 'Coding'],
    // Add more user parameters as needed
  };

  const assignments = [
    { id: 1, name: 'Essay on Shakespeare', dueDate: 'January 31, 2024' },
    { id: 2, name: 'Research Paper on Victorian Era', dueDate: 'February 10, 2024' },
    { id: 3, name: 'British History Assignment', dueDate: 'February 15, 2024' },
    { id: 4, name: 'Literature Review on British Culture', dueDate: 'February 20, 2024' },
    { id: 5, name: 'Grammar Quiz', dueDate: 'February 25, 2024' },
    { id: 6, name: 'British Politics Debate', dueDate: 'March 1, 2024' },
    { id: 7, name: 'Essay on Victorian Literature', dueDate: 'March 5, 2024' },
    { id: 8, name: 'Presentation on Contemporary British Writing', dueDate: 'March 10, 2024' },
    { id: 9, name: 'Quiz on British Culture', dueDate: 'March 15, 2024' },
    { id: 10, name: 'Assignment on Shakespeare Studies', dueDate: 'March 20, 2024' },
    // Add more assignments as needed
  ];

  return (
    <>
   
   <CustomNavBar className="custom-navbar" />
    <div className="app_profile">
 
    <section className="user-section_profile">
            <div className="user-card_profile">
              <div className="user-image_profile">
                <img src={profile} alt="Profile Picture" />
              </div>
              <div className="user-details_profile">
                <h3 className="user-name_profile">{userData.username}</h3>
                <p className="user-email_profile">Email: {userData.email}</p>
                <p className="user-age_profile">Age: {userData.age}</p>
                <p className="user-country_profile">Country: {userData.country}</p>
                <p className="user-occupation_profile">Occupation: {userData.occupation}</p>
                <p className="user-interests_profile">Interests: {userData.interests.join(', ')}</p>
                {/* Add other user parameters here */}
              </div>
            </div>
          </section>
      <main className="main_profile">
        <section className="section_profile">
          <h2 className="h2_profile">My Courses</h2>
          <div className="card-container_profile">
            {courses.map(course => (
              <div className="card_profile" key={course.id}>
                <h3 className="h3_profile">{course.name}</h3>
                <progress className="progress_profile" value={course.progress} max="100"></progress>
              </div>
            ))}
          </div>
        </section>
         
        
      </main>
      <footer className="footer_profile">
        {/* Footer content */}
      </footer>
    </div> </>
  );
}

export default Profile;
