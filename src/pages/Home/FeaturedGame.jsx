import FeaturedGameCard from '../../components/FeaturedGameCard'
import Title from '../../components/Title'
import games from '../../data'

const FeaturedGame = () => {
  return (
    <div className='py-20 px-16'>
      <Title title="Just Featured" subTitle="Games" />
      <div className="grid grid-cols-3 justify-items-center pt-20">
        {
          games.slice(0, 6).map((item) => {
            return (
              <div className="" key={item.id}>
                <FeaturedGameCard image={item.image} title={item.title} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default FeaturedGame