import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeContainer from './components/pages/Home/HomeContainer'
import NavBarContainer from './components/layout/navBar/NavBarContainer'
import BlogContainer from './components/pages/blog/BlogContainer'
import CvContainer from './components/pages/Cv/CvContainer'
import ContactContainer from './components/pages/Contact/ContactContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/blog' element={<BlogContainer />} />
          <Route path='/apps' element={<HomeContainer />} />
          <Route path='/cv' element={<CvContainer />} />
          <Route path='/contact' element={<ContactContainer />} />
          <Route path='*' element={<Link to={"/"}>Go back to home, my friend!</Link>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
