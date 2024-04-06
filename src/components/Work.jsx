import { fadeIn } from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <section className='px-4 section lg:h-screen md:h-screen' id='work'>
      <div className='container mx-auto'>
        <div>
          <h2 className='text-center h2 text-accent'>My Project.</h2>
        </div>

        <div className='gap-5 sm:flex sm:flex-wrap sm:justify-center'>
          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>

          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>

          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>

          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>

          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>
          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>
          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>
          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>
          <div className='sm:w-full md:w-2/5 lg:w-64'>
            {/* image */}
            <div className='relative overflow-hidden border-2 group border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <img className='transition-all duration-500 group-hover:scale-125' src={Img1} alt='project1' />
              {/* prettie */}
              <div className='absolute z-50 transition-all duration-500 -bottom-full left-7 group-hover:bottom-12'>
                <span className='text-slate-50'>UI/UX Design</span>
              </div>
              {/* Project title */}
              <div className='absolute z-50 transition-all duration-700 -bottom-full left-7 group-hover:bottom-4'>
                <span className='text-2xl font-semibold'>Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
