import Logo from '../assets/images/logo.png'
import HeaderBg from '../assets/images/header_bg.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const linkClass = ({ isActive }) => isActive ? 'text-black bg-primary hover:bg-primary hover:text-black px-5 py-3 transition-all duration-300' : 'text-white hover:bg-primary hover:text-black px-5 py-3 transition-all duration-300'

  return (
    <div className='flex justify-center'>
      <div className="flex justify-between items-center font-Oxanium font-semibold p-6 rounded-xl absolute z-20 w-[95%] top-6 bg-center bg-no-repeat" style={{ backgroundImage: `url(${HeaderBg})` }}>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav className='flex  col-start-auto text-white'>
          <NavLink to='/' className={linkClass}>Home</NavLink>
          <NavLink to='/pages' className={linkClass}>Pages</NavLink>
          <NavLink to='/overview' className={linkClass}>Overview</NavLink>
          <NavLink to='/community' className={linkClass}>Community</NavLink>
          <NavLink to='/store' className={linkClass}>Store</NavLink>
          <NavLink to='/blog' className={linkClass}>Blog</NavLink>
          <NavLink to='/contact' className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}
export default Header