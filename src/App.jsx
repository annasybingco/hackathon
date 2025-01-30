import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/movies" element={<MovieDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
