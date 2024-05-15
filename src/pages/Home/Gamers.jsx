import gamerImage from '../../assets/images/just_gamer_bg.jpg'
import GamersLeft from "./GamersLeft"
import justGamer from '../../assets/images/just_gamers_img.png'
import justGamerchart from '../../assets/images/just_gamers_chart.png'
import gamerLine from '../../assets/images/gamers_circle_line.png'
import gamerCircle from '../../assets/images/gamers_circle_shape.png'

const Gamers = () => {
  return (
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${gamerImage})`, backgroundPosition: 'center center' }}>
      <div className="container mx-auto px-10">
        <div className="flex justify-between">
          <GamersLeft className="" />
          <div className="hidden lg:block items-center">
            <span className='w-0 h-0 
  border-l-[230px] border-l-transparent
  border-t-[160px] border-t-white
  border-r-[230px] border-r-transparent absolute z-10 -translate-x-[25%]'></span>
            <img src={justGamer} alt="" className='relative z-20 py-8' />
            <span className='w-0 h-0 border-l-[180px] border-l-transparent border-b-[150px] border-b-white absolute border-r-[180px] border-r-transparent z-10 -translate-x-[20%] -translate-y-[100%] place-content-baseline '></span>
          </div>
          <div className="hidden lg:block pt-28">
            <img src={justGamerchart} alt="" className='h-auto' />
            <div className="flex absolute -ml-40 -mt-28">
              <img src={gamerLine} alt="" />
              <img src={gamerCircle} alt="" className='animate-spin-slow absolute ml-[120px] mt-[45px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Gamers