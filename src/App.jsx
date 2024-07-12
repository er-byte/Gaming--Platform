import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage'
import NewsPage from './pages/NewsPage/NewsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'


function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact us" element={<ContactPage />} />
      </Routes>

      <Footer />


    </>
  );
}

export default App;
