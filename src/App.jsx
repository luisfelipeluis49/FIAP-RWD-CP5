import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Details from './pages/Detais';
import About from './pages/About';
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='details' element={<Details />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//export default App
