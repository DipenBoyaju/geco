import gamerImage from '../../assets/images/just_gamer_bg.jpg'
import GamersLeft from "./GamersLeft"
import justGamer from '../../assets/images/just_gamers_img.png'
import justGamerchart from '../../assets/images/just_gamers_chart.png'

const Gamers = () => {
  return (
    <div className="py-20 bg-no-repeat bg-center" style={{ backgroundImage: `url(${gamerImage})` }}>
      <div className="container mx-auto px-10 flex">
        <GamersLeft />
        <img src={justGamer} alt="" />
        <img src={justGamerchart} alt="" className='h-auto' />
      </div>
    </div>
  )
}
export default Gamers