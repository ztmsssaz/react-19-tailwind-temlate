import { Button } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserDispatch } from '../context/hooks'
import { logout } from '../context/user-slice'
import { useEffect } from 'react'
import { googleLogout } from '@react-oauth/google'

export default function Navbar() {
   const dispatch = useUserDispatch()
   const navigate = useNavigate()

   function handleLogOut() {
      console.log('object')
      dispatch(logout())
      googleLogout()
      navigate('/login') 
   }
   useEffect(()=>{
      console.log('nav bar object')
   },[])
   return (
      <>
         {location.pathname !== 'login' && (
            <nav className="fixed right-[0] top-[0] z-10 w-full bg-white py-10 shadow-md">
               <div className="container flex items-center justify-between">
                  <div className="text-lg font-bold text-blue-700">MyApp</div>
                  <div className="space-x-6">
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           `p-7 text-sm ${isActive ? 'border-b font-medium' : ''} `
                        }
                     >
                        Home
                     </NavLink>
                     <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                           `p-7 text-sm ${isActive ? 'border-b font-medium' : ''} `
                        }
                     >
                        Dashboard
                     </NavLink>
                     |
                     <Button
                        onClick={handleLogOut}
                        className={'text-sm font-light hover:font-medium'}
                     >
                        LogOut
                     </Button>
                  </div>
               </div>
            </nav>
         )}
      </>
   )
}
