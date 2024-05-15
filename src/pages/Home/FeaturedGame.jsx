import FeaturedGameCard from '../../components/FeaturedGameCard'
import Title from '../../components/Title'
import games from '../../data'

const FeaturedGame = () => {
  return (
    <div className='py-20'>
      <Title title="Just Featured" subTitle="Games" />
      <div className="">
        <FeaturedGameCard />
        {
          games.map((item) => {
            return (
              <div className="" key={item.id}>
                <h1>{item.title}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default FeaturedGame