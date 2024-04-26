import TitleBg from "../../components/TitleBg"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import Newsletter from "../../layouts/Newsletter"
import SlideLogo from "./SlideLogo"

const Contact = () => {
  return (
    <div>
      <TitleBg title="Contact" subTitle='Info' linkName='Contact' />
      <div className="py-28">
        <ContactInfo />
        <ContactForm />
        <SlideLogo className="mx-0" />
      </div>
    </div>
  )
}
export default Contact