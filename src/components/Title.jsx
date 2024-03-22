import Seperator from '../assets/images/title_bar02.png'

const Title = () => {
  return (
    <div className="text-center space-y-6">
      <h1 className="uppercase text-4xl font-extrabold text-title font-Oxaniumos">Released <span className="text-primary">Games</span></h1>
      <p className="text-textLight font-Poppins text-[15px] w-[45%] mx-auto">Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
      <img src={Seperator} alt="" className='mx-auto' />
    </div>
  )
}
export default Title