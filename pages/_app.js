import { TechnologyModalProvider } from '../context/TechnologyModalContext'
import '../styles/globals.css'
import '../styles/variables.css'

function MyApp({ Component, pageProps }) {
  return (
      <TechnologyModalProvider>
        <Component {...pageProps} />
      </TechnologyModalProvider>
    )
}

export default MyApp
