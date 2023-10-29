import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Details from './pages/Detais';
import About from './pages/About';
import NoPage from './pages/NoPage';
import { Container, LightTheme, DarkTheme } from './style'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Layout from './pages/Layout';

export default function App() {
  const [theme, setTheme] = useState('light');

  const mudarTheme = () => {
    setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout theme={mudarTheme}/>}> 
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='details' element={<Details />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
