import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
const app = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/trainers' element={<Trainers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default app