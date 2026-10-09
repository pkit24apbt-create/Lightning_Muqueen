import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Skills from './components/Skills.jsx';
import Team from './components/Team.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Services />
        <Process />
        <Skills />
        <Team />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}