import { Provider } from 'react-redux'
import { store } from './context/store'
import MainRouter from './router/router'
import { GoogleOAuthProvider } from '@react-oauth/google';
import PWAInstaller from './components/pwaInstaller';

const CLIENT_ID = '728176836167-c4iq2ah4cvu92g2nsma97q3e5ulee912.apps.googleusercontent.com'

function App() {
   return (
      
      <Provider store={store}>
         <GoogleOAuthProvider clientId={CLIENT_ID}>
         <MainRouter />
         <PWAInstaller/>
         </GoogleOAuthProvider>
      </Provider>
   )
}

export default App
