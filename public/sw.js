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
