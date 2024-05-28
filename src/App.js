import './App.css';
import Money from './components/Money';
import Nvda from './components/Nvda';
import Navsection from './components/Navsection';
import Slidersection from './components/Slidersection';
import Footer from './components/Footer';
import Trending from './components/Trending';
function App() {
  return (
    <div>
      {/* <Navsection/> */}
      {/* <Slidersection/> */}
      <Trending/>
      <Money/>
      <Nvda/>
      <Footer/>
    </div>
  );
}

export default App;
