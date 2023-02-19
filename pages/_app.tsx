import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import {
  Header
} from '../components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='body'>
      <div className='bg-overlay'>
        <Image
          src='/imgs/worship.png'
          alt='People praising God'
          layout='fill'
          objectFit='contain'
        />
        <div className='bg-tint'></div>
      </div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
