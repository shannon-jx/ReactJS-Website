import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from '../assets/wegojim.png';
import Img2 from '../assets/todo.png';
import Img3 from '../assets/foracause.png';

const Projects = () => {
  return (
    <section className='section' id='projects'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}} 
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Projects.
              </h2>
              <p className='max-w-sm mb-8'>
                Here are some of the side projects that I have done in my free time - Web development and Mobile Application Development. Powered by various sources, such as ReactJS, TailwindCSS, Flutter, etc.
              </p>
              <button className='btn btn-sm'>
                <a href="https://github.com/shannon-jx">
                  View all Projects
                </a>
              </button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* image */}
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={Img2} 
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-white'>Mobile App Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-accent'>
                  <a href="https://github.com/shannon-jx/To-Do-App" className='hover:cursor-pointer'>
                    Flutter Task Application
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}} 
            className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-6'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* image */}
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={Img3} 
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-white'>Web Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-accent'>
                  <a href="https://devpost.com/software/infinitycoders" className='hover:cursor-pointer'>
                    Integrated-Map Voluteering Website
                  </a>
                </span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* image */}
              <img 
                className='group-hover:scale-125 transition-all duration-500' 
                src={Img1} 
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-white'>Mobile App Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-accent'>
                  <a href="https://github.com/shannon-jx/WeGoJim" className='hover:cursor-pointer'>
                    Workout/Fitness App
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
