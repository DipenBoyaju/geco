import seperator from '../../assets/images/title_bar03.png'

const GamersLeft = () => {
  return (
    <div className=''>
      <div className="text-left space-y-6">
        <h1 className="uppercase text-4xl font-extrabold text-white font-Oxaniumos">Just For <span className="text-primary">Gamers</span></h1>
        <p className="text-textDark font-Poppins text-[15px] w-[38%] ">Compete with 100 player on a remote island for winner known issue where certain strategic</p>
        <img src={seperator} alt="" className='' />
      </div>
      <div className="">
        <div className="">
          <img src="" alt="" />
          <div className="">
            <h2>Vr Developemnt</h2>
            <p>See how well critics rating new video game release with 100 players</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GamersLeft