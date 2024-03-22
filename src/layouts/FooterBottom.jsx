import footerBtm from '../assets/images/card_img.png'

const FottorBottom = () => {
  return (
    <div className="bg-[#140a1c] flex justify-between px-20 py-8">
      <p className="text-footerText font-Poppins text-[15px]">Copyright © 2022 <span className="text-primary">Geco</span> All Rights Reserved.</p>
      <img src={footerBtm} alt="" />
    </div>
  )
}
export default FottorBottom