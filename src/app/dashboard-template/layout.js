import { DM_Sans } from 'next/font/google';
// import './globals.css'
import SideMenu from '../dashboard-template/components/SideMenu';
import AdminHeader from '../dashboard-template/components/AdminHeader';


const sans = DM_Sans({ weight: ["300", "500", "700", "900"], subsets: ["latin"] })

export const metadata = {
  title: "Welcome Admin",
  description:
    "Fees and Payments at your doorstep",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className} suppressHydrationWarning={true}>
        <main className='flex blueGreen flex-col md:flex-row min-h-screen overflow-hidden max-w-7xl mx-auto'>
          <SideMenu />
          {/* <div className="overflow-x-hidden  w-full">{children}</div> */}
          <main className="relative h-screen flex flex-col flex-1 w-full overflow-y-auto bg-[#F1F1F1] ">
            <AdminHeader />
             {children}
          </main>
        </main>
      </body>
    </html>
  )
}
