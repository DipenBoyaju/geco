const ContactForm = () => {
  return (
    <div className="font-Poppins text-sm pt-8 mx-20 lg:w-[35%]">
      <form action="" className="space-y-4">
        <textarea name="message" id="message" rows="5" placeholder="Write Message" className="w-full p-2 focus:outline-none border-b-2 border-transparent focus:border-primary "></textarea>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-14 gap-4">
          <input type="text" id="name" placeholder="Your Name" className="w-full focus:outline-none border-b-2 border-transparent focus:border-primary p-2 h-10" />
          <input type="email" id="email" placeholder="Your Mail" className="w-full focus:outline-none border-b-2 border-transparent focus:border-primary p-2 h-10" />

        </div>
        <button type="submit" className="uppercase text-title font-bold font-Poppins text-[16px] border-b-2 border-primary w-full py-4 flex justify-center pt-10 hover:text-primary transition-all duration-500">Submit Message</button>
      </form>
    </div>
  )
}
export default ContactForm