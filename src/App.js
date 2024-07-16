import Header from './component/Header';
import Hero from './component/Hero';
import './App.css';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
