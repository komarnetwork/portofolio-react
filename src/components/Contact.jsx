import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Button from './button'

const Contact = () => {
  return (
    <section className='relative h-screen px-4 py-16' id='contact'>
      <div className='container py-24 mx-auto'>
        <div className='flex flex-col w-full mb-12 text-center'>
          <motion.h2
            variants={fadeIn('up', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='mb-4 text-2xl font-medium h2 text-accent title-font sm:text-3xl'
          >
            Contact Us.
          </motion.h2>
        </div>

        <div className='mx-auto md:w-2/3 lg:w-1/2'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='flex flex-wrap -m-2'
          >
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-3 py-1 text-base font-semibold leading-8 placeholder-transparent transition-colors duration-200 ease-in-out border border-blue-400 rounded outline-none bg-indigo-50 focus:text-zinc-600 peer bg-opacity-40 focus:border-blue-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-200'
                  placeholder='Name'
                />
                <label className='absolute text-sm leading-7 transition-all bg-transparent left-3 -top-6 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500'>
                  Name
                </label>
              </div>
            </div>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-3 py-1 text-base font-semibold leading-8 placeholder-transparent transition-colors duration-200 ease-in-out border border-blue-400 rounded outline-none bg-indigo-50 focus:text-zinc-600 peer bg-opacity-40 focus:border-blue-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-200'
                  placeholder='Email'
                />
                <label className='absolute text-sm leading-7 transition-all bg-transparent left-3 -top-6 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500'>
                  Email
                </label>
              </div>
            </div>
            <div className='w-full p-2 mt-4'>
              <div className='relative'>
                <textarea
                  id='message'
                  name='message'
                  className='w-full px-3 py-1 text-base font-semibold leading-8 placeholder-transparent transition-colors duration-200 ease-in-out border border-blue-400 rounded outline-none bg-indigo-50 focus:text-zinc-600 peer bg-opacity-40 focus:border-blue-500 focus:bg-indigo-100 focus:ring-2 focus:ring-indigo-200'
                  placeholder='Message'
                ></textarea>
                <label className='absolute text-sm leading-7 transition-all bg-transparent left-3 -top-6 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500'>
                  Message
                </label>
              </div>
            </div>
            <div className='flex mx-auto'>
              <Button>Send message</Button>
            </div>

            <div className='w-full p-2 pt-8 mt-8 text-center border-t border-indigo-200'></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
