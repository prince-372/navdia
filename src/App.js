import './App.css';
import Money from './components/Money';
import Navsection from './components/Navsection';
import Slidersection from './components/Slidersection';
import Investsection from './components/Investsection';
import Nvda from './components/Nvda';
import Footer from './components/Footer';
import Growth from './components/Growth';
import Trending from './components/Trending';

function App() {
  return (
    <div>
      <Navsection/>
      <Slidersection/>
      <Investsection/>
      <Growth/>
      <Trending/>
      <Money/>
      <Nvda/>
      <Footer/>
    </div>
  );
}

export default App;
