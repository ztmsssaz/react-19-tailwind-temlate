// src/pages/NotFound.tsx
import { Link } from 'react-router-dom'

export default function NotFound() {
   return (
      <div className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center bg-gray-100 px-4 text-center">
         <h1 className="text-[120px] font-extrabold text-blue-600 drop-shadow-md">
            404
         </h1>
         <h2 className="mt-4 text-3xl font-semibold text-gray-800">
            Page Not Found
         </h2>
         <p className="my-5 mt-2 text-gray-600">
            Sorry, the page you are looking for doesn't exist or has been moved.
         </p>
         <Link
            to="/"
            className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-white shadow-lg transition duration-300 hover:bg-blue-700"
         >
            Go Home
         </Link>

         <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>Maybe you mistyped the URL?</span>
            <span>Or the page was deleted?</span>
         </div>

         <div className="absolute bottom-4 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
         </div>
      </div>
   )
}
