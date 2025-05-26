import { Outlet } from "react-router-dom"
import { Header } from "Header.jsx"

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}