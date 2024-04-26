import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "../../assets/images/brand_logo01.png"
import brand2 from "../../assets/images/brand_logo02.png"
import brand3 from "../../assets/images/brand_logo03.png"
import brand4 from "../../assets/images/brand_logo04.png"
import brand5 from "../../assets/images/brand_logo05.png"
import brand6 from "../../assets/images/brand_logo06.png"

const SlideLogo = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: false,
  }

  return (
    <div className="bg-[#201525] mt-32 p-20 ">
      <div className="slider-container text-white items-center content-center">
        <Slider {...settings} className="grid grid-cols-1 gap-6 lg:grid-cols-1 items-center content-center">
          <div>
            <img src={brand1} alt="" />
          </div>
          <div>
            <img src={brand2} alt="" />
          </div>
          <div>
            <img src={brand3} alt="" />
          </div>
          <div>
            <img src={brand4} alt="" />
          </div>
          <div>
            <img src={brand6} alt="" />
          </div>
          <div>
            <img src={brand5} alt="" />
          </div>
        </Slider>
      </div>
    </div>

  )
}
export default SlideLogo