// components
import Banner from './components/Banner'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className='overflow-hidden bg-[#f6f6fe] bg-no-repeat md:bg-cover lg:bg-cover lg:bg-site bg-sitemb'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
