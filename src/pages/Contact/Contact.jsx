import TitleBg from "../../components/TitleBg"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

const Contact = () => {
  return (
    <div>
      <TitleBg title="Contact" subTitle='Info' linkName='Contact' />
      <div className="py-28 mx-24 w-[35%]">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}
export default Contact