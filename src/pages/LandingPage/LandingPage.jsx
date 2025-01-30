import React from 'react'
import '../LandingPage/LandingPage.scss'

function LandingPage() {
  return (
    <>
    <div className='hero'>
    <h1>Welcome to ReelRecs</h1>
    <p>Struggling to find the perfect movie? Let fate decide with a random pick, or filter by genre to discover the perfect match for your mood. Whether you're in the mood for action, romance, or something in between, we’ve got you covered!</p>
    </div>

    <div className='hero__random'>
        <h2>Feeling Lucky?</h2>
        <button>Click here</button>
    </div>

    <div className='hero__filter'>
        <h2>Filter by genre</h2>
        <button>Click here</button>
    </div>

    </>
  )
}

export default LandingPage