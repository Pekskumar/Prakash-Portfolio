import { Container } from "react-bootstrap";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import SectionHeader from "./Components/SectionHeader";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import About from "./Components/About";


function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Container>
        <SectionHeader id='About' title='About Me' detail='Check out my professional experience below.' />
        <About />
        <SectionHeader id='Experience' title='Experience' detail='Check out my professional experience below.' />
        <Experience />
        <SectionHeader id='Projects' title='Projects' detail='Explore my featured projects below.' />
        <Project />
      </Container>
      <SectionHeader id='Skills' title='Skills' detail='Building exceptional digital experiences with the power of different skills.' />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
