
import { useNavigate } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from "./components/Home/Navbar/Navbar"
import About from './components/About/About';
import Footer from './components/Home/footer';
import Mainfooter from './components/Home/Mainfooter';
import NotFound from './components/pages/NotFound'
const App = () => {
  let neviget = useNavigate()
const btnClick = () =>{
  neviget('/')
    }
  return (
    
    <div className="min-h-screen overflow-hidden  bg-white">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
     <Mainfooter />
    </div>
  );
};

export default App;
{/* <Route path='/product' element={<Product />} >
<Route path= '*'element={<Not />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        </Route> */}