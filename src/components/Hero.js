import React from 'react'

function Hero(heroName) {
    if(heroName === "joker"){
        throw new Error("Not a hero!")
    }
  return (
    <p>{heroName}</p>
  )
}

export default Hero