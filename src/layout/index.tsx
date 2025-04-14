import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
   return <div className="font-Poppins text-center font-normal">{children}</div>
}

export default Layout
