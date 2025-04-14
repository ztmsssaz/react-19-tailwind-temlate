import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
   const navigate = useNavigate()

   useEffect(() => {
      console.log(localStorage.getItem('Token'))
      if (localStorage.getItem('Token')) {
         navigate('/')
      }
   }, [])

   return <div>Login page</div>
}

export default Login
