import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Details from './pages/Detais';
import About from './pages/About';
import NoPage from './pages/NoPage';
import { Button, Container, LightTheme, DarkTheme } from './style'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light')

  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <h1>MUDANÇAS CLIMÁTICAS</h1>

      <Button onClick={mudarTheme}>TEMA</Button>
      
      <hr/>
      <Container>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='details' element={<Details />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

//export default App
