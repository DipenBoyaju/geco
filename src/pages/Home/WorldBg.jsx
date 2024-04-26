import worldbg from '../../assets/images/cta_bg.jpg'
import divider from '../../assets/images/title_bar03.png'
import ctaIcon from '../../assets/images/cta_icon.png'
import ctaImg from '../../assets/images/cta_img.png'
import Button from '../../components/Button'

const WorldBg = () => {
  return (
    <div className='bg-no-repeat h-[100vh] w-full grid grid-cols-2 items-center px-20 bg-cover bg-center' style={{ backgroundImage: `url(${worldbg})` }}>
      <div className="">
        <img src={ctaImg} alt="" />
      </div>
      <div className="space-y-7">
        <img src={ctaIcon} alt="" />
        <h1 className="uppercase text-5xl font-extrabold text-white font-Oxaniumos">Worlds Meet <span className="text-primary">Real</span></h1>
        <p className='text-white'>Compete with 100 player on a remote island for winner known issue where certain strategic</p>
        <img src={divider} alt="" />
        <Button sub="View Schedule" />
      </div>
    </div>
  )
}
export default WorldBg