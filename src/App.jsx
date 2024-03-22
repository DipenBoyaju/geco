import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Contact from "./pages/Contact"
import Home from "./pages/Home/Home"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App