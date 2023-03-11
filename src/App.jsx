import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Footer from './compenents/footer';
import ListProject from './ListProject/ListProject';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ListProject' element={<ListProject />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
