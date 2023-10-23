import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbM6pQYEB6cJUVJ3FtEvaTMD-uft72yyI",
  authDomain: "personalwebsite-e5f32.firebaseapp.com",
  projectId: "personalwebsite-e5f32",
  storageBucket: "personalwebsite-e5f32.appspot.com",
  messagingSenderId: "736918279915",
  appId: "1:736918279915:web:014de4050d2847195a90ae"
};

const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Projects />
      <Services />
      <Contact firebaseApp={app} />
    </div>
  );
};

export default App;
