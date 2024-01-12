import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Skills from './Body/Skills'
import line from './assets/waves.json'
import Lottie from 'lottie-react'
import Footer from './Footer/Footer'
import Projects from './Body/Projects'


const Portfolio = () => {
  
  return (
    <>
     <div style={{
            content: '""',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 1,
            background:
              'linear-gradient(to right,#ece9e6, #ffffff )',
            filter: 'blur(100px)',
            zIndex: -1,
          }} 
        ></div>
    <Header></Header>
    <Body></Body>
    <Skills></Skills>
    <Projects></Projects>
    <Footer></Footer>
       <div className="absolute -mt-10 left-0 w-full z-1 lg:-mt-40 ">
          <Lottie
            animationData={line}
            loop={true}
            className='w-full'
            
          />
    </div>
    </>
  )
}

export default Portfolio