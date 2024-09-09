import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contacts from './Components/Contacts/Contacts';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Program from './Components/Program/Program';
import Testimonial from './Components/Testimonial/Testimonial';
import Vedio from './Components/Video/Vedio';

function App() {
  const [play, setPlay] = useState(false)
  return <>
    <Navbar />
    <div className="container">
      <Hero />
      <Program />
      <About setPlay={setPlay}/>
      <Campus/>
      <Testimonial/>
      <Contacts/>
    </div>
    <Vedio setPlay={setPlay} play={play}/>

  </>
}

export default App;
