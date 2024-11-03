import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Web Development',
    desc: 'Create powerful, user-friendly websites tailored to your unique requirements.'
  },
  {
    name: 'Mobile Application Development',
    desc: 'Build innovative and responsive mobile apps for various platforms.'
  },
  {
    name: 'AWS Cloud Services',
    desc: 'Automate and migrate manual services to the cloud such as S3 Storage, Lambda functions, Elastic Cloud Computing (EC2), DynamoDB, etc.'
  },
  {
    name: 'Consulting Service',
    desc: 'Get expert guidance and solutions for your software development projects.'
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto flex flex-col lg:flex-row'>
        {/* left */}
        <motion.div variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col'>
          {services.map((service, index) => {

            const { name, desc } = service;
            return (
              <div key={index} className='border-b border-white/20 h-[130px] mr-7'>
                <div className='h4 tracking-wider font-primary font-semibold mb-2 mt-2 text-accent'>
                  {name}
                </div>
                <p>{desc}</p>
              </div>
            );
            })}
        </motion.div>
        {/* right */}
        <motion.div variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col'>
          <h2 className='h2 leading-tight text-accent'>My Services.</h2>
          <h3 className='h3'>I am dedicated to delivering high-quality solutions that align with your vision and objectives. Let's work together to bring your ideas to life.</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
