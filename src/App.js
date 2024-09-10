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


function App() {
  return (
    <>
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
        <SectionHeader id='Experience' title='Experience' detail='Check out my professional experience below.' />
        <Experience />
        <SectionHeader id='Projects' title='Projects' detail='Explore my featured projects below.' />
        <Project />
        <SectionHeader id='Skills' title='Skills' detail='Building exceptional digital experiences with the power of different skills.' />
      </Container>
      <Skills />
      <Container>
        <SectionHeader id='Testimonial' title='Testimonial' detail='Building exceptional digital experiences with the power of different skills.' />
      </Container>
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
