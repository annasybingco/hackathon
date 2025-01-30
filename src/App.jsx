import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage'
import MoviePage from './pages/MoviePage/MoviePage'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/movies/:movieId" element={<MoviePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
