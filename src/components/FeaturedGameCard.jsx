// import FeImage1 from '../assets/images/featured_game_thumb01.jpg'

import { FaBell } from "react-icons/fa"

const FeaturedGameCard = ({ image, title }) => {
  return (
    <div className="hover:cursor-pointer">
      <img src={image} alt="" />
      <h1 className="uppercase">Just for gamers</h1>
      <p><FaBell /> Playstation 5 , Xbox</p>
      <p>{title}</p>
    </div>
  )
}
export default FeaturedGameCard