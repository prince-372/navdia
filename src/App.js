import logo from './logo.svg';
import './App.css';
import Money from './components/Money';
import Navsection from './components/Navsection';
import Slidersection from './components/Slidersection';

function App() {
  return (
    <div>
      <Navsection/>
      <Slidersection/>
      <Money/>
    </div>
  );
}

export default App;
