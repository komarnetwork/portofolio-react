import Image from '../assets/avatar.svg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='flex px-4 items-center min-h-[85vh] lg:min-h-[78vh]' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='text-5xl font-bold'
            >
              Komarudin
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='mb-6 text-3xl font-semibold uppercase lg:text-4xl leading-[1]'
            >
              <span className='mr-2'>I am a</span>
              <TypeAnimation
                sequence={['Full Stack Developer', 2000, 'Web Developer', 2000]}
                speed={50}
                className='text-accent '
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='max-w-lg mx-auto mb-8 lg:mx-0'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem unde illum dolor quasi reprehenderit praesentium dolore accusantium
              vero officiis doloremque.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portofolio
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={fadeIn('up', 0.9)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className='flex mx-auto gap-x-6 max-w-max lg:mx-0'
            >
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} className='flex-1 hidden lg:flex max-w-80 lg:max-w-lg'>
            <img src={Image} alt='ProfileImg' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
