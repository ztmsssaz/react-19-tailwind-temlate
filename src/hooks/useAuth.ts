export const useAuth = () => {
   const localData = localStorage.getItem('userData')
   const token: string | null = localData ? JSON.parse(localData)?.token : null

   if (token) {
      return true
   }
   return false
}
