
import type { AppProps } from "next/app";

import CustomChakraProvider from "./components/CustomChakraProvider";




export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomChakraProvider >
   
       <Component {...pageProps} />
    </CustomChakraProvider>
  )
}
