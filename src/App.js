import 'animate.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ProjectDetails from './components/Projects/ProjectDetails'
import Projects from './components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe'
import About from './components/About'
import Blogs from './components/Blogs'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div  >
      <Header />

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/projects/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/contact' element={<ContactMe></ContactMe>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
