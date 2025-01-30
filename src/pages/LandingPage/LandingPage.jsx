import React from 'react'
import '../LandingPage/LandingPage.scss'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <div className='hero'>
    <h1>Welcome to Popcorn Picks</h1>
    <h4>Struggling to find the perfect movie? Let fate decide with a random pick. Whether you're in the mood for action, romance, or something in between, we’ve got you covered!</h4>
    </div>

    <div className='hero__random'>
        <h3>Feeling Lucky?</h3>
       <Link to ="/movies"> <button>Click here</button></Link>
    </div>

    </>
  )
}

export default LandingPage