// components/NotifyButton.jsx
import { useEffect, useState } from 'react'

export default function NotifyButton() {
   const [permission, setPermission] = useState(Notification.permission)

   useEffect(() => {
      if ('Notification' in window) {
         Notification.requestPermission().then(setPermission)
      }
   }, [])

   const sendNotification = async () => {
      if (permission !== 'granted') {
         alert('اجازه‌ی ارسال نوتیفیکیشن داده نشده')
         return
      }

      const registration = await navigator.serviceWorker.getRegistration()
      if (registration) {
         registration.showNotification('🛎️ پیام جدید!', {
            body: 'روی این نوتیف کلیک کن تا وارد سایت بشی.',
            icon: '/pwa-192x192.png',
            vibrate: [100, 50, 100],
            data: {
               url: '/', // می‌تونی آدرس دلخواه بذاری
            },
         } as any)
      } else {
         alert('سرویس ورکر پیدا نشد 😢')
      }
   }

   return (
      <button
         onClick={sendNotification}
         className="rounded-10 bg-blue-600 px-8 py-10 text-white transition hover:bg-blue-800"
      >
         Send Notif!
      </button>
   )
}
