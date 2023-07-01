import Navbar from '@/components/navbar'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}
