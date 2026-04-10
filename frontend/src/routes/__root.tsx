import { Navbar } from '@/components/bundled/Navbar'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: ()=><> 
  <Navbar />
  <Outlet />
  </>,
})
