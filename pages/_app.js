import '../styles/globals.css'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'
import { AppProvider }  from '../Context/UseAppContext'

function MyApp({ Component, pageProps }) {
  return(<>
    <AppProvider>
  <BurgerMenu/>
  <Component {...pageProps} />
  </AppProvider>
  </>)
  

}

export default MyApp
