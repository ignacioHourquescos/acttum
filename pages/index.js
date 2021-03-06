import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Hires from '../components/Hires/Hires'
import OurServices from '../components/OurServices/OurServices'
import OurClients from '../components/OurClients/OurClients'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import AboutUs from '../components/AboutUs/AboutUs'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hires/>
      <AboutUs/>
      <OurClients/>

      <Footer/>
    


    </div>
  )
}
