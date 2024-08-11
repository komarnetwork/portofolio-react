// import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { experiences } from '../constants'
import Button from './button'
import ButtonOutline from './button/outline'
import Profile from '../assets/MyProfile.png'

const About = () => {
  const tools = [
    {
      name: 'Mysql',
      icon: '../../portofolio-react/assets/icon/MySQL.svg',
    },
    {
      name: 'Express',
      icon: '../../portofolio-react/assets/icon/Express.svg',
    },
    {
      name: 'React',
      icon: '../../portofolio-react/assets/icon/React.svg',
    },
    {
      name: 'Vue',
      icon: '../../portofolio-react/assets/icon/Vue.svg',
    },
    {
      name: 'Nodejs',
      icon: '../../portofolio-react/assets/icon/Nodejs.svg',
    },

    {
      name: 'JavaScript',
      icon: '../../portofolio-react/assets/icon/JavaScript.svg',
    },
    {
      name: 'Laravel',
      icon: '../../portofolio-react/assets/icon/Laravel.svg',
    },
    {
      name: 'Bootstrap',
      icon: '../../portofolio-react/assets/icon/Bootstrap.svg',
    },
    {
      name: 'Tailwind',
      icon: '../../portofolio-react/assets/icon/Tailwind.svg',
    },
    {
      name: 'GitHub',
      icon: '../../portofolio-react/assets/icon/GitHub.svg',
    },
    {
      name: 'Postman',
      icon: '../../portofolio-react/assets/icon/Postman.svg',
    },
    {
      name: 'Linux',
      icon: '../../portofolio-react/assets/icon/Linux.svg',
    },
  ]

  return (
    <section className='px-4 py-8 lg:py-28 lg:h-screen md:max-h-full' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10 lg:flex-row'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} className='flex items-center justify-center w-full'>
            <img src={Profile} className='object-cover shadow-lg md:h-full rounded-xl' />
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-wrap justify-center lg:justify-start'
          >
            <h2 className='h2'>About me.</h2>
            <p className='font-semibold'>
              Junior programmer with more than 2 years experience as a developer, where previously I was just a web developer using WordPress and
              blogger, and now I am starting my career in the field of more interactive and complex web programming, using Laravel, Javascript, Node
              JS, React, Vue, Express, and Hapi. I enjoy learning new things in programming. Currently, I am taking several Web Developer classes, one
              of which is {'"Dicoding Indonesia"'}
            </p>
            <div className='flex items-center py-5 gap-x-5'>
              <Button type='button' to='#'>
                Download CV
              </Button>
              <ButtonOutline type='button' to='#'>
                My Portfolio
              </ButtonOutline>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='flex flex-col items-center justify-center py-10'
        >
          <h3 className='uppercase h3 text-accent'>Technology</h3>
          <div className='grid justify-center grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-6'>
            {tools.map((t, index) => (
              <div
                className='flex flex-col items-center gap-2 px-5 py-1 transition-all duration-150 ease-out transform rounded-md cursor-pointer hover:border hover:scale-110 hover:shadow-xl'
                key={t.name}
              >
                <img src={t.icon} className='w-8 h-8' />
                <p>{t.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
