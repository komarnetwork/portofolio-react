import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <>
      <header className='px-4 py-8'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <a href='#'>
              <img src={Logo} alt='MyLogo' />
            </a>
            <button className='btn btn-sm'>Work with me</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
