import FeaturedGame from "./FeaturedGame"
import Gamers from "./Gamers"
import Hero from "./Hero"
import ReleasedGame from "./ReleasedGame"

const Home = () => {
  return (
    <div>
      <Hero />
      <ReleasedGame />
      <Gamers />
      <FeaturedGame />

    </div>
  )
}
export default Home