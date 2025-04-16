import { Outlet, Navigate } from 'react-router-dom'
import Navbar from '../layout/navbar'
import { useAuth } from '../hooks/useAuth'

export const PrivateRoute = ({ permission }: { permission?: boolean }) => {
   const token = useAuth()
   if (!token) {
      return <Navigate to={'/login'} />
   } else if (!permission) {
      return <Navigate to={'/'} />
   }

   return (
      <>
         <Navbar />
         <Outlet />
      </>
   )
}

export const PublicRoute = () => {
   const token = useAuth()
   // for pannel admin Must be logged in!!
   if (!token) return <Outlet />
   return <Navigate to={'/'} />
}
