const vapidPublicKey =
   'BL4Bz-F0E5YPLQz_xfXFYlG4YSCGyUPZ3nIgpXIfAZxUBeMZp7pbNd7OABjBkAiTzLJjU4RJq6cFqtXVzUdzH3U'

export async function registerPush() {
   if (!('serviceWorker' in navigator)) return

   const registration = await navigator.serviceWorker.register('/sw.js')
   const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
   })

   // ارسال subscription به سرور
   await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: { 'Content-Type': 'application/json' },
   })

   console.log('Push subscription registered:', subscription)
}

// helper
function urlBase64ToUint8Array(base64String: string) {
   const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
   const rawData = window.atob(base64)
   return new Uint8Array([...rawData].map((c) => c.charCodeAt(0)))
}
