import { FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const ContactInfo = () => {
  return (
    <div className="container mx-auto">
      <h1 className="uppercase text-[30px] font-extrabold text-title font-Oxaniumos">Contact Us About <span className="text-primary">Press</span></h1>
      <ul className="font-Poppins space-y-2 pt-4">
        <li className="text-sm text-textLight"><FaMapMarkerAlt className="inline text-primary mr-2" />Walking Park, Los Angeles, Brockland, USA</li>
        <li className="text-sm text-textLight"><BiLogoGmail className="inline text-primary mr-2" />info@cloux.com</li>
      </ul>

    </div>
  )
}
export default ContactInfo