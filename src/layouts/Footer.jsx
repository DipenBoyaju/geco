import Logo from '../assets/images/logo.png'
import FooterBg from '../assets/images/footer_bg.jpg'
import { FaRocket } from "react-icons/fa6";
import { FaMapMarkerAlt, FaHeadphones } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {

  const titleStyle = 'text-footerTitle text-xl font-bold font-Oxanium';
  const listItemStyle = 'cursor-pointer hover:text-primary hover:pl-2 transition-all duration-500';

  return (
    <div style={{ backgroundImage: `url(${FooterBg})` }} className='bg-center bg-no-repeat'>
      <div className="grid grid-cols-4 py-32 container mx-auto  px-16">
        <div className="font-Poppins">
          <img src={Logo} alt="" />
          <p className='text-footerText pt-10'>Gemas marketplace the relase etras thats sheets continig passag.</p>
          <ul className='text-footerText space-y-2 mt-8 pr-4'>
            <li ><FaMapMarkerAlt className='inline mr-2' />Address : PO Box W75 Street lan West new queens</li>
            <li><FaHeadphones className='inline mr-2' />Phone : +24 1245 654 235</li>
            <li><BiLogoGmail className='inline mr-2' />Email : info@exemple.com</li>
          </ul>
        </div>
        <div className="space-y-4 pl-20">
          <h2 className={titleStyle}>Products</h2>
          <span className='absolute h-[3px] w-8 bg-primary'></span>
          <ul className='pt-12 space-y-4 text-footerText font-Poppins text-[15px]'>
            <li><a href="" className={listItemStyle}>Graphics (26)</a></li>
            <li><a href="" className={listItemStyle}>Backgrounds (11)</a></li>
            <li><a href="" className={listItemStyle}>Fonts (9)</a></li>
            <li><a href="" className={listItemStyle}>Music (3)</a></li>
            <li><a href="" className={listItemStyle}>Photography (3)</a></li>
          </ul>
        </div>
        <div className="space-y-4 pl-10">
          <h2 className={titleStyle}>Need Help?</h2>
          <span className='absolute h-[3px] w-8 bg-primary'></span>
          <ul className='pt-12 space-y-4 text-footerText font-Poppins text-[15px]'>
            <li><a href="" className={listItemStyle}>Terms & Conditions</a></li>
            <li><a href="" className={listItemStyle}>Privacy Policy</a></li>
            <li><a href="" className={listItemStyle}>Refund Policy</a></li>
            <li><a href="" className={listItemStyle}>Affiliate</a></li>
            <li><a href="" className={listItemStyle}>FAQUse Cases</a></li>
          </ul>
        </div>
        <div className="space-y-5">
          <h2 className={titleStyle}>Follow us</h2>
          <span className='absolute h-[3px] w-8 bg-primary'></span>
          <h2 className={`pt-10 ${titleStyle}`}>Newsletter Sign up</h2>
          <span className='absolute h-[3px] w-8 bg-primary'></span>
          <div className="pt-10">
            <input type="text" className='rounded-sm bg-text2 py-3 px-4 focus:outline-none text-white' placeholder='Enter your email' />
            <button className='bg-primary text-title h-12 text-sm px-5'><FaRocket /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer