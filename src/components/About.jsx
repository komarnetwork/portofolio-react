import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section className='px-4 section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col h-screen gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* Img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-top bg-no-repeat bg-contain bg-about h-[640px] mix-blend-lighten'
          ></motion.div>
          {/* Desc */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 '
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <p className='mb-6'>
              Junior programmer with more than 2 years experience as a developer, where previously I was just a web developer using WordPress and
              blogger, and now I am starting my career in the field of more interactive and complex web programming, using Laravel, Javascript, Node
              JS, ReactJS, VueJS, Express, and HapiJS. I enjoy learning new things in programming. Currently, I am taking several Web Developer
              classes, one of which is {'"Dicoding Indonesia"'}
            </p>
            {/* slots */}
            <div className='flex mb-12 gap-x-6 lg:gap-x-10'>
              <div>
                <div className='mb-2 text-3xl font-tertiary text-gradient'>{inView ? <CountUp start={0} end={2} duration={3} /> : null}</div>
                <div className='font-primary text-sm tracking-[2px'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='mb-2 text-3xl font-tertiary text-gradient'>{inView ? <CountUp start={0} end={5} duration={3} /> : null}</div>
                <div className='font-primary text-sm tracking-[2px'>
                  Projects <br />
                </div>
              </div>
              <div>
                <div className='mb-2 text-3xl font-tertiary text-gradient'>{inView ? <CountUp start={0} end={5} duration={3} /> : null}</div>
                <div className='font-primary text-sm tracking-[2px'>Clients</div>
              </div>
            </div>
            <div className='flex items-center gap-x-8'>
              <button className='btn btn-lg'>Download CV</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
