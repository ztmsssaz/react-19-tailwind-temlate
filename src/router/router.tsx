// @ts-nocheck

import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { PrivateRoute, PublicRoute } from './configs'
import Layout from '../layout'
import FallbackLoading from '../components/fallbackLoading'
import NotFound from '../pages/Error404'

const Home = lazy(() => import('../pages/home'))
const Dashboard = lazy(() => import('../pages/dashboard'))
const Login = lazy(() => import('../pages/auth/login'))

const MainRouter = () => {
   // #ignore eslint
   return (
      <Router>
         <Suspense fallback={<FallbackLoading />}>
            <Layout>
               <Routes>
                  <Route path="/" element={<PrivateRoute permission />}>
                     <Route path="/" element={<Home />} />
                  </Route>

                  <Route
                     path="/dashboard"
                     element={<PrivateRoute permission />}
                  >
                     <Route path="/dashboard" element={<Dashboard />} />
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
