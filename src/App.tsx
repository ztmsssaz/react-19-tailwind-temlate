import { Provider } from 'react-redux'
import { store } from './context/store'
import MainRouter from './router/router'
import { useEffect } from 'react'
import { registerPush } from './utils/push'

function App() {
   useEffect(() => {
      registerPush()
      if (!('Notification' in window)) {
         alert('مرورگر شما از نوتیفیکیشن پشتیبانی نمی‌کند.')
      } else {
         Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
               console.log('✔️ اجازه نوتیفیکیشن داده شد')
            } else if (permission === 'denied') {
               console.warn('❌ نوتیفیکیشن رد شد')
            } else {
               console.log('ℹ️ کاربر تصمیم نگرفت (default)')
            }
         })
      }
   }, [])
   return (
      <Provider store={store}>
         <MainRouter />
      </Provider>
   )
}

export default App
