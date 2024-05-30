import './App.css';
import Money from './components/Money';
import Growth from './components/Growth';
import Nvda from './components/Nvda';
import Footer from './components/Footer';
import Trending from './components/Trending';
import BackToTop from './components/Backtotop';
import Invest from './components/Invest';
import Header from './components/Header';
import Slider from './components/Slider';
function App() {
  return (
    <div>
      <Header/>
      <Slider/>
        <Invest/>
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
