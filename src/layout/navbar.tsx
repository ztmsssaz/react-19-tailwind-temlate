import { Button } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserDispatch } from '../context/hooks'
import { logout } from '../context/user-slice'

export default function Navbar() {
   const dispatch = useUserDispatch()
   const navigate = useNavigate()

   function handleLogOut() {
      dispatch(logout())
      navigate('/login')
   }

   return (
      <>
         {location.pathname !== 'login' && (
            <nav className="fixed right-[0] top-[0] z-10 w-full bg-white py-10 shadow-md">
               <div className="container flex items-center justify-between">
                  <div className="flex items-center text-lg font-bold text-[#3d3d3d]">
                     <img src="/logo.png" width={40} />
                     <span className="ml-5">App</span>
                  </div>
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
                     </NavLink>{' '}
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
