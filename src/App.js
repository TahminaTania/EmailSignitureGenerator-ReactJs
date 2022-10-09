import './App.css';
import Generate from './Components/Generate';
import Navbar from './Design//Navbar/Navbar';
import Logo from './Design/Navbar/Logo';
// import Copy from '../src/Components/Copy';

function App() {
  return (
    <main>
      <Navbar/>
      <Logo/>
      <Generate/>
      {/* <Copy/> */}
    </main>
  );
}

export default App;
