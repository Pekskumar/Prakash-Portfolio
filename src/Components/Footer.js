import React from 'react'
import HeartIcon from '../Assets/Images/HeartIcon'

const Footer = () => {
  return (
    // <footer className='text-center mt-3 py-3'>Built by <b>Me</b>. Source code available on GitHub.</footer>
    <footer className='text-center py-3'>Made with <span className='mx-1 footer-heart'><HeartIcon/></span> by <a target='_blank' href='https://www.linkedin.com/in/pek-s-kumar-ba2636125/'><b>Me</b></a></footer>
  )
}

export default Footer