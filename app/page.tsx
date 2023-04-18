import Image from 'next/image'
import { Nunito } from 'next/font/google'
import styles from './page.module.css'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-rose-500 text-2xl">Hello Airbnb</div>
  )
}
