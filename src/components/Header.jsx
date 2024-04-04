import Logo from '../assets/logo.png'
import Button from './button'

const Header = () => {
  return (
    <header className='px-4 py-8'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between '>
          <a href='#'>
            <img src={Logo} alt='MyLogo' />
          </a>
          <Button type='button'>Work with me</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
