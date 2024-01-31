import '../assets/css/about.css';
 import founder from "../assets/images/henery.jpg";
import confidence from "../assets/images/confidence.png";
import journey from "../assets/images/journey.png";
import worlds from "../assets/images/worlds.png";
import tm1 from "../assets/images/tm1.jpeg";
import tm2 from "../assets/images/tm2.jpeg";
import tm3 from "../assets/images/tm3.jpeg";
import tm4 from "../assets/images/tm4.jpeg";
import tm5 from "../assets/images/tm5.jpeg";
import Carous from '../components/Carsoul';
import CustomNavBar from '../components/CustomNavBar';
const AboutUs = () => {
  const missionSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const differentiatorsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="about-us-container">
        <CustomNavBar/>
       <section className="hero-section">
        <div className="hero-image">
          {/* <img src={} alt=''></img> */}
          {/* Collage showcasing diverse individuals */}
        </div>
       
      </section>

      <section className="founder-section">
  <div className="founder-box">
    <div className="founder-content">
      <h2>Our Founder's Journey:</h2>
      <p>
      Henry Dunant (1828–1910) was a Swiss businessman, social activist, and the visionary founder of the Red Cross. Born in Geneva, Switzerland, Dunant's life took a transformative turn after witnessing the aftermath of the Battle of Solferino in 1859 during the Second Italian War of Independence.

Shocked by the lack of medical care for wounded soldiers, Dunant took it upon himself to organize local civilians to provide aid to both French and Austrian soldiers, regardless of their allegiance. This experience planted the seeds for his groundbreaking book, "A Memory of Solferino" (1862), where he proposed the establishment of neutral volunteer groups to care for the wounded in times of conflict.

Inspired by Dunant's ideas, the International Committee of the Red Cross (ICRC) was founded in 1863, with Dunant playing a crucial role in its establishment. The ICRC aimed to provide humanitarian aid during armed conflicts, emphasizing neutrality, impartiality, and independence.

Despite his significant contribution to humanitarian efforts, Dunant faced personal challenges, including financial ruin and obscurity. In 1901, he was awarded the first Nobel Peace Prize, sharing it with Frédéric Passy, in recognition of his pioneering role in the creation of the Red Cross.

Henry Dunant's legacy endures through the continued work of the Red Cross and humanitarian organizations worldwide. His compassionate response to the suffering of others laid the foundation for modern humanitarian principles and the alleviation of human suffering during times of war and disaster.

Despite his significant contribution to humanitarian efforts, Dunant faced personal challenges, including financial ruin and obscurity. In 1901, he was awarded the first Nobel Peace Prize, sharing it with Frédéric Passy, in recognition of his pioneering role in the creation of the Red Cross.
This hands-on experience propelled him to write "A Memory of Solferino" in 1862, a book that outlined his observations and proposed the establishment of neutral volunteer groups to care for the wounded in times of conflict.

Inspired by Dunant's ideas, the International Committee of the Red Cross (ICRC) was founded in 1863, with Dunant playing a pivotal role in its establishment. The ICRC aimed to provide humanitarian aid during armed conflicts, emphasizing principles of neutrality, impartiality, and independence.




      </p>
    </div>
    <div className="founder-image">
      <img src={founder} alt="Founder" />
    </div>
  </div>
</section>
      <section className="team-section">
  <div className="team-content">
    <h2>Our Team:</h2>
    <div className="team-grid">
      <div className="team-member">
        <img src={tm1} alt="Team Member 1" />
        <h3>John Doe</h3>
        <p>John is an experienced English teacher with a passion for helping others achieve language proficiency.</p>
      </div>
      <div className="team-member">
        <img src={tm2} alt="Team Member 2" />
        <h3>Kate Cross</h3>
        <p>Kate is a language enthusiast who loves to inspire and motivate students in their language learning journey.</p>
      </div>
      <div className="team-member">
        <img src={tm3} alt="Team Member 3" />
        <h3>Michael Johnson</h3>
        <p>Michael brings years of teaching experience and a unique approach to language instruction.</p>
      </div>
      <div className="team-member">
        <img src={tm4} alt="Team Member 4" />
        <h3>Sarah Wilson</h3>
        <p>Sarah is dedicated to creating engaging and effective learning experiences for students.</p>
      </div>
      {/* <div className="team-member">
        <img src="team-member5.jpg" alt="Team Member 5" />
        <h3>David Brown</h3>
        <p>David's passion for languages drives him to continuously innovate and improve language education.</p>
      </div> */}
      <div className="team-member">
        <img src={tm5} alt="Team Member 6" />
        <h3></h3>
        <p>Emily's friendly and supportive approach makes learning English a positive and rewarding experience.</p>
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
}

export default AboutUs;
