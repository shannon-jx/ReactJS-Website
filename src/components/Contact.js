import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const Contact = ({ firebaseApp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [placeholder, setPlaceholder] = useState({
    name: 'Name',
    email: 'Email',
    message: 'Message',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const db = getFirestore(firebaseApp);
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      alert('Email is invalid!');
    } else {
      try {
        await addDoc(collection(db, 'forms'), {
          Name: name,
          Email: email,
          Message: message,
          Sent: Date(),
        });
  
        setFormData({ name: '', email: '', message: '' });
        setPlaceholder({ name: 'Name', email: 'Email', message: 'Message' });
        alert('Email sent! Reload this site to send a new message!');
  
      } catch (error) {
        alert('Email could not be sent. Please try again.');
      }
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-white font-medium mb-2 tracking-wide'>
                Get In Touch
              </h4>
              <h2 className='text-accent text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's Work <br /> Together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-10 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder={placeholder.name}
              onChange={handleChange}
              name='name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder={placeholder.email}
              onChange={handleChange}
              name='email'
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder={placeholder.message}
              onChange={handleChange}
              name='message'
            ></textarea>
            <button onClick={handleSubmit} className='btn btn-sm'>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
