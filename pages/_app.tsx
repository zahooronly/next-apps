// import '../styles/globals.css'
// import chakra ui
import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from '../styles/theme'

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Component {...pageProps} />
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
