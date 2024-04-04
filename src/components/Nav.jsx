import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className='fixed z-50 w-full overflow-hidden bottom-2 lg:bottom-8'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between w-full h-12 px-5 mx-auto bg-blue-400 rounded-full backdrop-blur-2xl max-w-80 text-slate-50'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            duration={500}
            offset={-200}
            className='flex items-center justify-center w-12 h-12 cursor-pointer'
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            duration={500}
            className='flex items-center justify-center w-12 h-12 cursor-pointer'
          >
            <BiUser />
          </Link>
          <Link
            to='experience'
            activeClass='active'
            smooth={true}
            spy={true}
            duration={500}
            className='flex items-center justify-center w-12 h-12 cursor-pointer'
          >
            <BsClipboardData />
          </Link>
          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            duration={500}
            className='flex items-center justify-center w-12 h-12 cursor-pointer'
          >
            <BsBriefcase />
          </Link>
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            duration={500}
            className='flex items-center justify-center w-12 h-12 cursor-pointer'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
