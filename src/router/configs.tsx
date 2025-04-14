import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = ({ permission }: { permission?: boolean }) => {
   const token = localStorage.getItem('Token')
   if (!token) {
      return <Navigate to={'/login'} />
   } else if (!permission) {
      return <Navigate to={'/'} />
   }

   return <Outlet />
}

export const PublicRoute = () => {
   const token = localStorage.getItem('Token')
   console.log(token)
   // for pannel admin Must be logged in!!
   if (!token) return <Outlet />
   return <Navigate to={'/'} />
}
