import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useLogout } from "@/modules/auth/presentation/hooks/use-logout"
import { Link, useNavigate } from "@tanstack/react-router"

export function Navbar() {
  const navigate = useNavigate()
  const { mutate: logout, isPending } = useLogout()
  const isAuthenticated = Boolean(localStorage.getItem("token"))

  const handleLogout = () => {
    logout(undefined, {
      onSettled: () => {
        navigate({ to: "/login" })
      },
    })
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {isAuthenticated ? (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/skills">Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        ) : null}
        {isAuthenticated ? (
          <NavigationMenuItem>
            <Button variant="outline" size="sm" onClick={handleLogout} disabled={isPending}>
              {isPending ? "Logging out..." : "Logout"}
            </Button>
          </NavigationMenuItem>
        ) : (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/login">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/register">Register</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}