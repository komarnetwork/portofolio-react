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
            <h3 className='mb-4 h3'>Junior programmer with more than 2 years of experience using the Laravel, React JS</h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate excepturi aspernatur nam vitae ex iure voluptas sapiente voluptatem
              odio maiores, saepe dignissimos cumque culpa eum quasi ullam itaque temporibus incidunt id pariatur minus similique rem! Libero non
              ducimus numquam repellat!
            </p>
            {/* slots */}
            <div className='flex mb-12 gap-x-6 lg:gap-x-10'>
              <div>
                <div className='mb-2 text-3xl font-tertiary text-gradient'>{inView ? <CountUp start={0} end={13} duration={3} /> : null}</div>
                <div className='font-primary text-sm tracking-[2px'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='mb-2 text-3xl font-tertiary text-gradient'>{inView ? <CountUp start={0} end={15} duration={3} /> : null} k+</div>
                <div className='font-primary text-sm tracking-[2px'>
                  Projects <br />
                </div>
              </div>
              <div>
                <div className='mb-2 text-3xl font-tertiary text-gradient'>{inView ? <CountUp start={0} end={13} duration={3} /> : null}</div>
                <div className='font-primary text-sm tracking-[2px'>
                  Satisfid <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-8'>
              <button className='btn btn-lg'>Contact me</button>
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
