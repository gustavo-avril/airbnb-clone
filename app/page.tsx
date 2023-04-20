import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';


const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-rose-500 text-2xl">
      <Navbar />
    </div>
  )
}
