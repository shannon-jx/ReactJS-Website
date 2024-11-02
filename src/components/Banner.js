import React from 'react';
import Image from '../assets/profile2.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:'>
          {/* text */}
          <motion.div variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.5}} 
            className='flex-1 text-center font-secondary lg:text-left'>
            <div className='text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] lg:mt-20'>
              HELLO! <span>I'M A </span> 
              <TypeAnimation 
                sequence={[
                  'Software Engineer',
                  2000,
                  'Developer',
                  2000,
                  'IT Consultant',
                  2000,
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <h1 className='text-[55px] mb-6 font-bold leading-[0.8] lg:text-[110px]'>
              SHANNON <span>NG</span>
            </h1>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='text-black btn btn-lg'>
                <Link 
                  to='contact'
                  smooth={true}
                >
                  Contact Me
                </Link>
              </button>
              <a href='https://drive.google.com/file/d/16T5mk2qa0m7BagYzQlExKYn9M8xAZ7ma/view?usp=sharing' className='text-accent font-bold font-primary btn-link'>
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.linkedin.com/in/shannon-ng-a0a87b227">
                <FaLinkedin style={{ color: 'white' }} onMouseOver={(e) => e.target.style.color = '#ffbd3c'} onMouseOut={(e) => e.target.style.color = 'white'}/>
              </a>
              <a href='https://github.com/shannon-jx'>
                <FaGithub style={{ color: 'white' }} onMouseOver={(e) => e.target.style.color = '#ffbd3c'} onMouseOut={(e) => e.target.style.color = 'white'}/>
              </a>
              <a href='https://www.instagram.com/shannon.jx/'>
                <FaInstagram style={{ color: 'white' }} onMouseOver={(e) => e.target.style.color = '#ffbd3c'} onMouseOut={(e) => e.target.style.color = 'white'}/>
              </a>
            </div>
          </motion.div>
          {/* image */}
          <motion.div variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.5}} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]'> 
            <img src={Image} alt='' style={{height: '400px'}}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
