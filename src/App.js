import './App.css';
import Blog from './Components/Blog/Blog';
import Generate from './Components/Generate';
import Navbar from './Design//Navbar/Navbar';
import Logo from './Design/Navbar/Logo';
import Footer from '../src/Design/Footer/Footer'
// import Copy from '../src/Components/Copy';

function App() {
  return (
    <main>
      <Navbar/>
      <Logo/>
      <Generate/>
      <Blog/>
      <Footer/>
    </main>
  );
}

export default App;
