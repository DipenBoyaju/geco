const Button = () => {
  return (
    <div className="group w-auto relative">
      <button className="bg-primary text-title uppercase font-Poppins font-bold py-3 px-6 peer">Buy Now</button>
      <span className="bg-primary w-1 h-[44px] ml-2 absolute peer-hover:-ml-2 transition-all duration-700"></span>
    </div>
  )
}
export default Button