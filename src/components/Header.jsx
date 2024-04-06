import Logo from '../assets/logo.png'
import Button from './button'

import Image from '../assets/avatarKecil.png'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'

import ButtonOutline from './button/outline'

const Header = () => {
  return (
    <header className='px-4 py-8'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <a href='#'>
            <img src={Logo} alt='MyLogo' />
          </a>
          <Button type='button'>Work with me</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
