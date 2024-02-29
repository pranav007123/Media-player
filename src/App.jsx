

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      
<Route path='/'element={<Landing/>}/>
<Route path='/home'element={<Home/>}/>
<Route path='/watch'element={<Watch/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
