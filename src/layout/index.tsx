import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
 
   return (
      <>
         <main className="font-Poppins container relative top-[48px] text-center font-normal">
            {children}
         </main>
      </>
   )
}

export default Layout
