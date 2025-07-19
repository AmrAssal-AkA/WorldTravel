import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import Footer from './component/footer';
import Home from './Pages/Home';
import Package from './Pages/Packages';
import Destination from './Pages/Destination';
import Blog from './Pages/Blog';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes >
      <Route index element={<Home />} />
      <Route path='/Packages' element={<Package/>} />
      <Route path='/Destination' element={<Destination/>} />
      <Route path='/Blog' element={<Blog/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
