
import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './layout/Main'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Recipe from './pages/Recipe'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Category from './pages/Category'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main className='container content'>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path='/category/:name' element={<Category/>}/>
                <Route path='/meal/:id' element={<Recipe/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
