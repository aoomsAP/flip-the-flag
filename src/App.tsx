import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css";

// components and pages
import Root from "./components/Root/Root"
import HomePage from "./pages/HomePage/HomePage"
import OverviewPage from "./pages/OverviewPage/OverviewPage"
import DetailPage from "./pages/DetailPage/DetailPage"

// contextx
import { DataProvider } from "./contexts/DataContext"
import { SiteSettingsProvider } from "./contexts/SiteSettingsContext"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "countries",
          element: <OverviewPage />,
        },
        {
          path: "countries/:name",
          element: <DetailPage />
        }
      ]
    }
  ])

  return (
    <>
      <SiteSettingsProvider>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </SiteSettingsProvider>
    </>
  )
}

export default App
