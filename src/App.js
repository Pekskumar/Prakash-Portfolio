import { Container } from "react-bootstrap";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import SectionHeader from "./Components/SectionHeader";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import { useEffect, useState } from "react";


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <button id="button" onClick={scrollToTop} className="scroll-to-top show">
          <svg fill="#fff" width="20px" height="20px" viewBox="0 -6 524 524" xmlns="http://www.w3.org/2000/svg" ><title>up</title><path d="M460 321L426 355 262 192 98 355 64 321 262 125 460 321Z" /></svg>
        </button>
      )}

      <div className="pt-4">
        <Header />
        <HeroBanner />
        {/* <div className="bg-color">
        <Container>
           <SectionHeader id='About' title='About Me' detail='Check out my professional experience below.' /> 
          <About />
        </Container>
      </div> */}
        <Container>
          <About />
          {/* <SectionHeader id='Experience' title='Experience' detail='Check out my professional experience below.' />        <SectionHeader id='Experience' title='Professional Experience' detail='Explore my career journey and the expertise I’ve gained along the way.' /> */}
          <SectionHeader id='Experience' title='Professional Experience' detail='Explore my career journey and the expertise I’ve gained along the way.' />

          <Experience />
          {/* <SectionHeader id='Projects' title='Projects' detail='Explore my featured projects below.' /> */}
          <SectionHeader id='Projects' title='Featured Projects' detail='Dive into my work and see how I bring ideas to life through innovation.' />

          <Project />
          {/* <SectionHeader id='Skills' title='Skills' detail='Building exceptional digital experiences with the power of different skills.' /> */}
          <SectionHeader id='Skills' title='Core Skills' detail='Harnessing a diverse set of skills to create remarkable digital solutions.' />

        </Container>
        <Skills />
        <Container className="custom-top">
          {/* <SectionHeader id='Testimonial' title='Testimonials' detail='Hear what others are saying about their exceptional experiences with me.' /> */}
          <SectionHeader id='Testimonial' title='Testimonials' detail='Read what my collaborators say about their experiences working with me.' />


        </Container>
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
