// @ts-nocheck

import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './configs'
import Layout from '../layout'
import NotFound from '../pages/Error404'

const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/auth/login'))
const Dashboard = lazy(() => import('../pages/dashboard'))

const MainRouter = () => {
   // #ignore eslint
   return (
      <Router>
         <Suspense fallback={<h2>Loading...</h2>}>
            <Layout>
               <Routes>
                  <Route path="/" element={<PrivateRoute permission />}>
                     <Route path="/" element={<Home />} />
                     <Route path="dashboard" element={<Dashboard />} />
                  </Route>

                  <Route path="/login" element={<PublicRoute />}>
                     <Route path="/login" element={<Login />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Layout>
         </Suspense>
      </Router>
   )
}

export default MainRouter
