import './App.css';
import LayoutTest from './components/LayoutTest';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard'
import BigProjectCard from './components/BigProjectCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main data-bs-spy="scroll" data-bs-target="#navRoot" data-bs-root-margin="0px 0px -25%">
        <LayoutTest/>
        <p>TEST PROJECT CARDS</p>
        <ProjectCard/>
        <ProjectCard 
        image={true}
        src={"images/m.jpg"}
        alt={"picture of a piece of parchment"}
        name={"Map Building Tool"} 
        type={"TypeScript / React / Frontend"}/>

        <p>TEST BIG PROJECT CARDS</p>
        <BigProjectCard/>
        <BigProjectCard/>
      </main>
    </div>
  );
}

export default App;
