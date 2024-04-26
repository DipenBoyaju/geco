import FeaturedGame from "./FeaturedGame"
import Gamers from "./Gamers"
import Hero from "./Hero"
import ReleasedGame from "./ReleasedGame"
import WorldBg from "./WorldBg"

const Home = () => {
  return (
    <div>
      <Hero />
      <ReleasedGame />
      <Gamers />
      <FeaturedGame />
      <WorldBg />
    </div>
  )
}
export default Home