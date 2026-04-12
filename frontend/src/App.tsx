import { createRouter, RouterProvider } from '@tanstack/react-router'
import './App.css'
import { authContext } from './core/auth/auth-context'
import { routeTree } from './routeTree.gen'
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


function App() {
  return <RouterProvider router={router} context={{ auth: authContext }} />
}

export default App
