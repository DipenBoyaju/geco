import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home/Home"
import Store from "./pages/Store"
import Contact from "./pages/Contact/Contact"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'store', element: <Store /> },
        { path: 'contact', element: <Contact /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App