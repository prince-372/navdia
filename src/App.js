import './App.css';
import Money from './components/Money';
import Nvda from './components/Nvda';
import Navsection from './components/Navsection';
import Slidersection from './components/Slidersection';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navsection/>
      <Slidersection/>
      <Money/>
      <Nvda/>
      <Footer/>
    </div>
  );
}

export default App;
