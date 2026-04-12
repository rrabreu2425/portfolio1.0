import { Navbar } from '@/components/bundled/Navbar'
import type { AuthContext } from '@/core/auth/auth-context'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

export const Route = createRootRouteWithContext<{ auth: AuthContext }>()({
  component: ()=><> 
  <Navbar />
  <Outlet />
  </>,
})
