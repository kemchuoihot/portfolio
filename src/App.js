import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Project from './components/project/Project.jsx';
import Qualification from './components/qualification/Qualification.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/srollup/ScrollUp.jsx';
function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Project />
      <Qualification />
      <Contact />
    </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
