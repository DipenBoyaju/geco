import { Link } from 'react-router-dom'
import TitleBgImage from '../assets/images/breadcrumb_bg.jpg'
import { MdDoubleArrow } from "react-icons/md";

const TitleBg = ({ title, subTitle, linkName }) => {
  return (
    <div className="">
      <div className="relative mx-auto text-center h-[550px] bg-center align-middle content-center" style={{ backgroundImage: `url(${TitleBgImage})` }}>
        <h1 className='uppercase text-7xl font-Oxanium font-extrabold text-white mt-20'>{title} <span className='text-primary'>{subTitle}</span></h1>
        <div className="uppercase text-white font-semibold flex justify-center items-center gap-2 pt-4">
          <Link to='/'>Home</Link>
          <MdDoubleArrow className='text-sm' />
          <span className=' text-primary'>{linkName}</span>
        </div>
      </div>
    </div >
  )
}
export default TitleBg