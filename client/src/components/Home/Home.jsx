import React from 'react'
import Slider from './Slider'
import "../../styles/Home/Home.css"
import LatestArticle from './LatestArticle'
import Categories from './Categories'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <div className="home-wrapper">
            <Slider />
            <Categories />
            <LatestArticle />
            <Footer />
        </div>
    </>
  )
}

export default Home