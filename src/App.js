import './App.css';
import Money from './components/Money';
import Navsection from './components/Navsection';
import Slidersection from './components/Slidersection';
import Nvda from './components/Nvda';
import Investsection from './components/Investsection';

function App() {
  return (
    <div>
      <Navsection/>
      <Slidersection/>
      <Investsection/>
      <Money/>
      <Nvda/>
    </div>
  );
}

export default App;
