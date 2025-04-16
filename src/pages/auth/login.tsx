import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../context/user-slice'
import { useUserDispatch } from '../../context/hooks'

function Login() {
   const navigate = useNavigate()
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const dispatch = useUserDispatch()

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // handle login logic here

      if (username?.length > 3 && password?.length > 3) {
         dispatch(
            login({
               name: 'Abolfazl',
               id: Math.floor(Math.random() * 100),
               token: 'aw1wr4g$%65gdr7nmHGd6556',
            })
         )
         setTimeout(() => {
            navigate('/')
         }, 1000)
      }
   }

   return (
      <div className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-gray-100 px-4">
         <div className="w-full max-w-md rounded-2xl bg-white p-20 shadow-xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
               Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                  <label className="mb-4 block text-sm font-medium text-gray-700">
                     Username
                  </label>
                  <input
                     type="Username"
                     className="w-full rounded-lg border border-gray-300 px-16 py-2 py-5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     required
                  />
               </div>
               <div>
                  <label className="mb-4 block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <input
                     type="password"
                     className="w-full rounded-lg border border-gray-300 px-16 py-2 py-5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                  />
               </div>
               <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-16 py-2 py-5 text-white transition hover:bg-blue-700"
               >
                  Log In
               </button>
            </form>
         </div>
      </div>
   )
}

export default Login
