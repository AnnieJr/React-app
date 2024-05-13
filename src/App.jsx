import'./App.css'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero.jsx'
import Astros from "./components/astros/Astros.jsx";
import {Routes, Route} from "react-router-dom";
import About from './components/about/about.jsx';

function App() {
  const links = [
  {
    id: 1,
    text: 'home',
    link: '/'
  }, 
  {
    id: 2,
    text: "apod",
    link: "/apod",
  }, 
  {
    id:3,
    text: "astros",
    link: "/astros",
  },
  ];

  return(
    <>
     <Navbar header="space-app" links={links} />
     <Routes>
       <Route element={<Hero/>} path="/" />
       <Route element={<Astros/>} path="/astros" />
       <Route element={<About/>} path="/about"/>
     </Routes>
   </>
  );
}

export default App;
