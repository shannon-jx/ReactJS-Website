import React, { useState } from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import MainImage from '../assets/self5.png';
import Image1 from '../assets/GDSC.JPG';
import Image2 from '../assets/GUI.jpg';
import Image3 from '../assets/NUS.jpg';
import Image4 from '../assets/TECQ.jpg';
import Image5 from '../assets/GE.png';
import Image6 from '../assets/GE_Notes.png';
import Image7 from '../assets/accenture.jpg';
import Image8 from '../assets/rhaeos.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const journey = [
  {
    name: 'NOC: Software Engineering Intern @ Rhaeos',
    description: 'Developed mobile application, automated data analysis and visualisation on AWS, and created a data visualisation website for a medical device company in the United States.',
    image: Image8,
    imageDesc: 'Rhaeos Logo'
  },
  {
    name: 'Summer 2024: Application Developer Intern @ Accenture',
    description: 'Developed the backend infrastructure, including API endpoints, for the website utilised by the Land Transport Authority (LTA) Public Transport Licensing System (PTLS).',
    image: Image7,
    imageDesc: 'LTA PTLS Project Team'
  },
  {
    name: 'August 2023: Full-Stack Developer @ Google Developers Student Club (GDSC)',
    description: 'Joined Project Kampung Connect - Built a volunteer management system for Ground-Up Initiative(GUI) to improve the efficiency of volunteer registration system.',
    image: Image1,
    imageDesc: 'At Google Developers Student Club (GDSC) Onboarding Event!'
  },
  {
    name: 'August 2023: Full-Stack Developer @ Google Developers Student Club (GDSC)',
    description: 'GUI is a non-profit organisation that nurtures people by giving them space to discover their sense of purpose through activities like wood-working and sustainability efforts, empowering them to contribute effectively towards the stewardship of our world.',
    image: Image2,
    imageDesc: 'Visited GUI with the tech team'
  },
  {
    name: 'August 2023: Teaching Assistant',
    description: 'NUS Module: IS1128 - IT, Management and Organisation. Assessed students\' physical presentation in final project and graded tutorials and quizzes',
    image: Image3,
    imageDesc: 'NUS Logo'
  },
  {
    name: 'June 2023: Software Engineering Intern @ Toppan Ecquaria',
    description: 'Assisted a $12 million NEA project in a team of software engineers and developers in developing a web-based application system.',
    image: Image4,
    imageDesc: 'Small Community of Colleagues at Toppan Ecquaria!'
  },
  {
    name: 'November 2022: Co-Founder of Gifted Education',
    description: 'Gifted Education was the brain child of two passionate private tutors, established in hopes of providing students with personalised, self-curated tuition.',
    image: Image5,
    imageDesc: 'Gifted Education\'s Telegram Community'
  },
  {
    name: 'November 2022: Co-Founder of Gifted Education',
    description: 'Together with a team of hand-picked tutors who we deemed were equally passionate in exploring this industry with us, we reached out to students who were in need of tutoring and began production of our own resources in order to provide them the highest quality education possible.',
    image: Image6,
    imageDesc: 'Free Resources Released to GE\'s Telegram Community!'
  }
]

const About = () => {
  const [currentSlideNo, setCurrentSlide] = useState(0);
  const currentSlide = journey[currentSlideNo];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % journey.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + journey.length) % journey.length);
  };

  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}}
            className="flex-1 flex flex-col">
            {/* left: title + description */}
              <img src={MainImage} alt='' style={{width: '400px', height: '300px', objectFit: 'cover'}} className='hidden lg:flex flex-1 mb-5'/>
              <h2 className="h2 leading-tight text-accent">About Me.</h2>
              <h3 className="h3">
                A self-driven and passionate undergraduate pursuing a Bachelor of Computing in Information Systems.
              </h3>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className="flex-1 flex flex-col">
            {/* right */}
            <div className='flex flex-row items-center'>
              <IoIosArrowBack
                onClick={handlePrev}
                style={{
                  color: "white",
                  cursor: "pointer",
                  position: "relative",
                  fontSize: "150px"
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#ffbd3c";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "white";
                }}
              />

              <div className='ml-2 mr-2' style={{ height: '700px' }}>
                <div className="mb-5 mt-9 border-b border-white/20">
                  <div>
                    <h4 className="h4 tracking-wider font-primary font-semibold mb-5 text-accent">
                      {currentSlide.name}
                    </h4>
                  </div>
                  <div>
                    <div className='mb-3 text-center'>
                      <img 
                        src={currentSlide.image} 
                        alt={currentSlide.name} 
                        style={{ width: '900px', height: '350px', objectFit: 'cover' }}
                      />
                      <em style={{fontSize: '16px'}}>{currentSlide.imageDesc}</em>
                    </div>
                  </div>
                  <div>
                    <p className="font-secondary">{currentSlide.description}</p>
                  </div>
                </div>
              </div>

              <IoIosArrowForward
                onClick={handleNext}
                style={{
                  color: "white",
                  cursor: "pointer",
                  position: "relative",
                  fontSize: "150px"
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#ffbd3c";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "white";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
