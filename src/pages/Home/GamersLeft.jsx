import seperator from '../../assets/images/title_bar03.png'
import gamer1 from '../../assets/images/gamer_list_icon01.png'
import gamer2 from '../../assets/images/gamer_list_icon02.png'
import gamer3 from '../../assets/images/gamer_list_icon03.png'
import gamerbg from '../../assets/images/gamer_list_icon_bg.jpg'

const GamersLeft = () => {
  return (
    <div className='text-center items-center lg:w-5/12 pt-28'>
      <div className="lg:text-left space-y-6">
        <h1 className="uppercase text-4xl font-extrabold text-white font-Oxaniumos">Just For  <span className="text-primary">Gamers</span></h1>
        <p className="text-textDark font-Poppins text-[15px] lg:w-[100%] ">Compete with 100 player on a remote island for winner known issue where certain strategic</p>
        <img src={seperator} alt="" className='' />
      </div>
      <div className="space-y-8 lg:pt-16 lg:space-y-10">
        <div className="flex flex-col items-center group space-y-4 lg:space-y-0 lg:flex-row lg:text-left">
          <div className="items-center flex justify-center w-24 h-24  border-[6px] border-zinc-700 group-hover:border-primary transition-all duration-500" style={{ backgroundImage: `url(${gamerbg})` }}>
            <img src={gamer1} alt="" />
          </div>
          <div className="w-2/3 pl-4">
            <h2 className='text-xl text-white font-bold tracking-wide pb-2 leading-none'>VR Developemnt</h2>
            <p className='text-zinc-300 text-[16px] font-[500] leading-7'>See how well critics rating new video game release with 100 players</p>
          </div>
        </div>
        <div className="flex flex-col items-center group space-y-4 lg:space-y-0 lg:flex-row lg:text-left">
          <div className="items-center flex justify-center w-24 h-24 border-[6px] border-zinc-700 group-hover:border-primary transition-all duration-500" style={{ backgroundImage: `url(${gamerbg})` }}>
            <img src={gamer2} alt="" />
          </div>
          <div className="w-2/3 pl-4">
            <h2 className='text-xl text-white font-bold tracking-wide pb-2'>Design & Strategy</h2>
            <p className='text-zinc-300 text-[16px] font-[500] leading-7'>Village and the subline of her own road, the Line Lane. Pityful a rethoric question</p>
          </div>
        </div>
        <div className="flex flex-col items-center group space-y-4 lg:space-y-0 lg:flex-row lg:text-left lg:items-center">
          <div className="items-center flex justify-center w-24 h-24 border-[6px] border-zinc-700 group-hover:border-primary transition-all duration-500" style={{ backgroundImage: `url(${gamerbg})` }}>
            <img src={gamer3} alt="" />
          </div>
          <div className="w-2/3 pl-4">
            <h2 className='text-xl text-white font-bold tracking-wide pb-2'>Jungle Pharaoh</h2>
            <p className='text-zinc-300 text-[16px] font-[500] leading-7'>Village and the subline of her own road, the Line Lane. Pityful a rethoric question</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GamersLeft