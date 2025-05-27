import { precacheAndRoute } from 'workbox-precaching'
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('push', function (event) {
   const data = event.data?.json() || {}
   const title = data.title || '📢 تست نوتیف'
   const options = {
      body: data.body || 'این یک پیام آزمایشی است',
      icon: '/pwa-192x192.png',
   }
   console.log(options)

   event.waitUntil(self.registration.showNotification(title, options))
})
self.addEventListener('notificationclick', function (event) {
   event.notification.close()

   event.waitUntil(
      clients
         .matchAll({ type: 'window', includeUncontrolled: true })
         .then((clientList) => {
            for (const client of clientList) {
               if (client?.url === '/' && 'focus' in client) {
                  console.log('Focus on same tab')
                  return client.focus()
               }
            }

            if (clients.openWindow) {
               console.log('Open in a new tab')
               return clients.openWindow('/')
            }
         })
   )
})
