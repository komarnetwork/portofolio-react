import Image from '../assets/avatarKecil.png'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'

import Button from './button'
import ButtonOutline from './button/outline'

const Banner = () => {
  return (
    <section className='h-screen px-4 py-8 lg:h-screen' id='home'>
      <div className='container mx-auto'>
        <div className='grid gap-5 lg:grid-cols-2 grid-rows-0'>
          <div className='flex flex-col items-center justify-center md:py-44 py-28 lg:text-left lg:items-start'>
            <motion.h1
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='text-5xl font-bold text-center'
            >
              Hi {"I'am"} <span className='text-accent'>Komarudin</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='text-2xl mb-8 text-center font-semibold uppercase leading-[1]'
            >
              <span className='mr-2'>I am a</span>
              <TypeAnimation
                sequence={['Fullstack Developer', 2000, 'Web Developer', 2000]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='mb-8 font-semibold text-center lg:text-left'
            >
              Junior programmer with more than 2 years experience as a developer, frontend and backend developer
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='flex items-center mx-auto mb-8 max-w-max gap-x-6 lg:mx-0'
            >
              <Button type='button' to='#'>
                Download CV
              </Button>

              <ButtonOutline type='button' to='#'>
                My Portofolio
              </ButtonOutline>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='flex mx-auto gap-x-6 max-w-max lg:mx-0'
            >
              <Link
                to='#'
                className='p-2 transition-all duration-500 bg-blue-600 rounded-full rounded-bl-none text-slate-50 hover:bg-slate-800 hover:text-slate-50 hover:-translate-y-3'
              >
                <FaGithub />
              </Link>
              <Link
                to='#'
                className='p-2 transition-all duration-500 bg-blue-600 rounded-full rounded-bl-none text-slate-50 hover:bg-slate-800 hover:text-slate-50 hover:-translate-y-3'
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to='#'
                className='p-2 transition-all duration-500 bg-blue-600 rounded-full rounded-bl-none text-slate-50 hover:bg-slate-800 hover:text-slate-50 hover:-translate-y-3'
              >
                <FaEnvelope />
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            whileInView={'show'}
            className='items-center justify-end hidden text-right lg:flex'
          >
            <img src={Image} alt='ProfileImg' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
