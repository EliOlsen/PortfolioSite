import './App.css';
import LayoutTest from './components/LayoutTest';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main data-bs-spy="scroll" data-bs-target="#navRoot" data-bs-root-margin="0px 0px -25%">
        <LayoutTest/>
      </main>
    </div>
  );
}

export default App;
