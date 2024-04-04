import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='px-4 py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex items-center justify-start flex-1'
          >
            <div>
              <h4 className='mb-2 text-xl font-medium tracking-wide uppercase text-accent'>Get in touch</h4>
              <h2 className='mb-10 text-4xl leading-none lg:text-5xl lg:mb-0'>
                {"Let's"} work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-col items-start flex-1 p-6 pb-24 mb-20 border rounded-2xl gap-y-6'
          >
            <input
              type='text'
              className='w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-slate-50 focus::border-accent'
              placeholder='Your name'
            />
            <input
              type='text'
              className='w-full py-3 transition-all bg-transparent border-b outline-none placeholder:text-slate-50 focus::border-accent'
              placeholder='Your email'
            />
            <textarea
              className='w-full py-12 mb-12 transition-all bg-transparent border-b outline-none resize-none placeholder:text-slate-50 focus::border-accent'
              placeholder='Your message '
            ></textarea>
            <button className='btn btn-lg'>send message</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
