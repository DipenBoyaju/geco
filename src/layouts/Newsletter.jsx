import { Button, Input } from "@material-tailwind/react";
import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <div className=" flex justify-center left-[10vw] -mt-16 absolute">
      <div className="p-10 bg-[#190E22] rounded-full w-[80vw] flex justify-between px-10 items-center z-6">
        <h1 className="text-2xl font-black font-Oxanium text-white">Our <span className="text-primary">Newsletter</span></h1>
        <div className="flex gap-2">
          <div className="w-[35vw] text-white">
            <Input className="text-text2 h-[46px] bg-text2 content-center items-center px-4" placeholder='Enter your email...' />
          </div>
          <Button className="bg-primary text-title text-sm">Subscribe</Button>

        </div>
      </div>
    </div>
  )
}
export default Newsletter