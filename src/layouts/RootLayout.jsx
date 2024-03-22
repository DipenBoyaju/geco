
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import FooterBottom from "./FooterBottom"

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  )
}
export default RootLayout