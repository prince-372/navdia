import './App.css';
import Money from './components/Money';
import Navsection from './components/Navsection';
import Slidersection from './components/Slidersection';
import Investsection from './components/Investsection';
import Growth from './components/Growth';
import Nvda from './components/Nvda';
import Footer from './components/Footer';
import Trending from './components/Trending';
import BackToTop from './components/Backtotop';
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
      <BackToTop/>
    </div>
  );
}

export default App;
