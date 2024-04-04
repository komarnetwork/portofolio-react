import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { HiOutlineBriefcase } from 'react-icons/hi'

const Experience = () => {
  const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: '#1d1836',
          color: '#fff',
        }}
        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='items-center w-full h-full '>
            <HiOutlineBriefcase className='object-contai' />
          </div>
        }
      >
        <div>
          <h3 className='text-slate-50 text-[24px] font-bold'>{experience.title}</h3>
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        <ul className='mt-5 ml-5 space-y-2 list-disc'>
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className='pl-1 text-sm tracking-wider text-slate-50'>
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    )
  }

  return (
    <>
      <section className='px-4' id='experience'>
        <motion.div variants={textVariant()} initial='hidden' whileInView={'show'}>
          <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
          <h2 className='text-center h2 text-accent'>Work Experience.</h2>
        </motion.div>

        <div className='flex flex-col mt-20'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  )
}
// export default SectionWrapper(Experience, 'work')
export default Experience
