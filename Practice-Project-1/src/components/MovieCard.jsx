 import React from 'react'

const MovieCard = () => {
  return (
    <div className='main'>
      <div className="Poster">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GWE4Yr0O0568f6FmggnySxvx0xYV9NmhSg&s"
          alt="movie"
        />
        <button className="like-btn">♥</button>
      </div>

      <div className="Details">
        <p>The Terminator</p>
        <p>1991</p>
      </div>
    </div>
  )
}

export default MovieCard
