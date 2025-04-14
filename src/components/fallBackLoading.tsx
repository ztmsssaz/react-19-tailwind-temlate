function FallbackLoading() {
   return (
      <div className="flex h-screen w-screen items-center justify-center">
         <div className="text-center">
            <div
               className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"
               role="status"
            >
               <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-3 text-lg font-semibold">Loading...</p>
         </div>
      </div>
   )
}

export default FallbackLoading
