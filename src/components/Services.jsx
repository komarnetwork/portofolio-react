import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugiat voluptate nobis saepe nam vero?',
    link: 'More',
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugiat voluptate nobis saepe nam vero?',
    link: 'More',
  },
  {
    name: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugiat voluptate nobis saepe nam vero?',
    link: 'More',
  },
  {
    name: 'Product Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugiat voluptate nobis saepe nam vero?',
    link: 'More',
  },
]

const Services = () => {
  return (
    <section className='px-4 section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text & image*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-12 bg-no-repeat lg:bg-services lg:bg-bottom mix-blend-lighten lg:mb-0'
          >
            <h2 className='mb-6 h2 text-accent'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Junior programmer with more than 2 years of experience using the Laravel, React JS</h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            {/* list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service

                return (
                  <div className='flex border-b border-white/20 mb-9 h-36' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='mb-6 text-lg font-semibold tracking-wider font-primary'>{name}</h4>
                      <p className='leading-tight font-secondary'>{description}</p>
                    </div>
                    <div className='flex flex-col items-end flex-1'>
                      <a href='#' className='flex items-center justify-center mb-10 btn w-9 h-9'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-sm text-gradient'>
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
