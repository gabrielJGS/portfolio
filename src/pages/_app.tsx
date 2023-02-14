import '@/styles/globals.css'
import "node_modules/react-image-gallery/styles/css/image-gallery.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
