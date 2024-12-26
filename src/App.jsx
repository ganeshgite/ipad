import { useState } from 'react'

import './App.css'
import '../css/ipad.css';
import TopHeader from './components/topheader/TopHeader'
import MainHeader from './components/mainheader/MainHeader'
import Carousel from './components/carousel/Carousel';
import News from './components/news/News';
import About from './components/about/About';
import Data from './components/data/Data';
import Footer from './components/footer/Footer';
import Logo from './logo/Logo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="header">
     <TopHeader />
     <MainHeader />
    </header>
    <Carousel />  
    <News />
    <About />
    <Data />
    <Logo />
    <Footer />
    </>
  )
}  


export default App
