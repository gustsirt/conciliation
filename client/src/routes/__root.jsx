import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

//export const Route = createRootRoute({ // lo uso si no necesito conext
  export const Route = createRootRouteWithContext()({
  component: () => (
    <>
      <div>
        <Link to="/"> Home </Link> 
        <Link to="/profile">{({isActive})=> <>Profile {isActive && "*"} </>}</Link>
        {/* <Link to="/pokemon/$id" params={{ id: 6 }}> Charizard</Link> */}
        <Link to="/pokemon/">Pokemons</Link>
        <Link to="/search"> Search </Link>
        <Link to="/login"> Login </Link>
        <Link to="/settings">Settings</Link>
        <Link to="/first-level"> First level </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})