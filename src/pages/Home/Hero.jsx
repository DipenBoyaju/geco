import HeroBg from '../../assets/images/slider_bg02.jpg'
import Button from '../../components/Button'
import slider1 from '../../assets/images/slider_img01.png'
import slider2 from '../../assets/images/slider_img02.png'

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${HeroBg})` }} className='h-svh relative'>
      <div className="flex items-center h-svh px-10 pt-32">
        <div className="">
          <span className='uppercase text-primary text-2xl font-bold'>World Gaming</span>
          <h1 className='capitalize text-8xl font-bold text-white tracking-tighter'>Create <span className='text-primary '>Manage</span> Game</h1>
          <p className='text-textDark py-6 w-[40vw]'>Find technology or people for digital projects in public sector and find an individual specialist developer research.</p>
          <Button sub="Read More" />
        </div>
        <div className="flex self-end ">
          <img src={slider2} alt="" className='w-[35%] absolute self-end items-end z-10 -ml-4' />
          <img src={slider1} alt="" className='w-[70%] z-20 items-end self-end ml-44 ' />
        </div>
      </div>
    </div>
  )
}
export default Hero