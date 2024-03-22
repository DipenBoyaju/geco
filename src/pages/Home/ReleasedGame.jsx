import Title from '../../components/Title'
import game1 from '../../assets/images/release_game_nav01.jpg'
import game2 from '../../assets/images/release_game_nav02.jpg'
import game3 from '../../assets/images/release_game_nav03.jpg'
import game4 from '../../assets/images/released_game_img01.jpg'
import brush from '../../assets/images/released_game_brush.png'
import { AiFillStar } from "react-icons/ai";
import Button from '../../components/Button'

const ReleasedGame = () => {
  return (
    <div className='container mx-auto px-14'>
      <div className="py-28">
        <Title title="Released" subTitle="Games" />
        <div className=" py-14 grid grid-cols-3 items-center">
          <div className="col-span-2 flex justify-between gap-8 items-center">
            <img src={game4} alt="" className='relative z-10' />
            <div className="text-textLight font-Poppins text-sm font-semibold space-y-2">
              <p><span className='text-[#413b43] text-[16px]'>Rating:</span>  <span className='inline-block text-primary text-lg'><AiFillStar className='inline' /><AiFillStar className='inline' /><AiFillStar className='inline' /><AiFillStar className='inline' /><AiFillStar className='inline' /></span></p>
              <div className="py-4">
                <h2 className='text-title text-xl font-bold relative z-10'>Call <span className='text-white'>of Duty</span></h2>
                <img src={brush} alt="" className='absolute -ml-40 -mt-10 z-5' />
              </div>
              <div className="space-y-2 py-3">
                <p><span className='text-[#413b43]'>Catergoy:</span> Virtual Game</p>
                <p><span className='text-[#413b43]'>Model:</span> Complete 100 players</p>
                <p><span className='text-[#413b43]'>Controller:</span> Playstation 5, Xbox, PS4</p>
              </div>
              <p className='leading-7 pr-20'> Complete 100 players on a remote thats island for winner takes showdown issue</p>
              <Button />
            </div>
          </div>
          <div className="space-y-8">
            <img src={game1} alt="" />
            <img src={game2} alt="" />
            <img src={game3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ReleasedGame