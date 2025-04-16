function FallbackLoading() {
   return (
      <div className="fixed right-0 top-0 flex h-screen w-screen items-center justify-center">
         <div className="flex items-center justify-center">
            <div
               className="mr-5 h-[35px] w-[35px] animate-spin rounded-full border-[3px] border-gray-300 border-t-blue-500"
               role="status"
            >
               <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-900">
               Loading...
            </p>
         </div>
      </div>
   )
}

export default FallbackLoading
