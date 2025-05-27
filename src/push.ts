const vapidPublicKey =
   'BL4Bz-F0E5YPLQz_xfXFYlG4YSCGyUPZ3nIgpXIfAZxUBeMZp7pbNd7OABjBkAiTzLJjU4RJq6cFqtXVzUdzH3U'

export async function registerPush() {
   if (!('serviceWorker' in navigator)) return

   try {
      // ۱. رجیستر کردن سرویس ورکر
      await navigator.serviceWorker.register('/sw.js')

      // ۲. منتظر بمون تا سرویس ورکر آماده بشه
      const registration = await navigator.serviceWorker.ready

      // ۳. سابسکرایب به PushManager
      const subscription = await registration.pushManager.subscribe({
         userVisibleOnly: true,
         applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
      })

      // ۴. ارسال به بک‌اند
      await fetch('/api/subscribe', {
         method: 'POST',
         body: JSON.stringify(subscription),
         headers: { 'Content-Type': 'application/json' },
      })

      console.log('✅ Push subscription registered:', subscription)
   } catch (err) {
      console.error('❌ Push registration failed:', err)
   }
}

// تبدیل کلید عمومی
function urlBase64ToUint8Array(base64String: string) {
   const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
   const rawData = window.atob(base64)
   return new Uint8Array([...rawData].map((c) => c.charCodeAt(0)))
}
