import './App.css';
import Navbar from './components/Navbar';
import Vector from './components/Vector';
import Hero from './Hero';
import Hero1 from './components/Hero1';
import Element from './components/Element';
import Bottom from './components/Bottom';



function App() {
  return (
    <div className="App">
       <Navbar/>
      
    <header className="App-header">
    <div>  <Vector/> </div>
   <Hero/>
   <Hero1/>
  
</header>
<div >
<Element/>
</div> 

    <div>
    <Bottom/>
    </div>
    
    </div>
  );
}

export default App;
