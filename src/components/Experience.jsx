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
          background: '#c0daf7',
          color: '#1561b8',
          boxShadow: ' 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        }}
        className='transition ease-in-out delay-150'
        contentArrowStyle={{ borderRight: '7px solid  #c0daf7' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='items-center w-full h-full text-accent'>
            <HiOutlineBriefcase className='object-contai' />
          </div>
        }
      >
        <div>
          <h3 className='text-accent text-[24px] font-bold'>{experience.title}</h3>
          <p className='text-[16px] text-accent font-semibold' style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        <ul className='mt-5 ml-5 space-y-2 list-disc'>
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className='pl-1 text-sm tracking-wider'>
              <p className='font-semibold text-accent'>{point}</p>
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    )
  }

  return (
    <>
      <section className='px-4 py-8' id='experience'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-center lg:flex-row gap-x-10'>
            <div>
              <p className='tracking-wider text-center uppercase text-secondary'>What I have done so far</p>
              <h2 className='text-center h2 text-accent'>Work Experience.</h2>
            </div>
          </div>

          <VerticalTimeline lineColor='#c0daf7'>
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
