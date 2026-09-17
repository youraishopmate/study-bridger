import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export const metadata={title:'StudyBridger — Find where you belong',description:'A clearer bridge to the education that fits your future.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/><main>{children}</main><Footer/></body></html>}
