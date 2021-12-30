import HeaderSub from '../../components/HeaderSub/HeaderSub'

import s from './index.module.scss'
import Head from 'next/head'
import Footer from '../../components/Footer/Footer'
import useAppContext from "../../Context/UseAppContext";

const Block = () => {
   const { lang } = useAppContext();


	return (
		<>
			<Head>
				<title>ACTTUM HR</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Acttum HR" />
				<meta property="og:title" content="Acttum HR" />
				<meta property="og:description" content="Servicios" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

			<HeaderSub titulo={lang == "ESP" ? "SERVICIOS" : "THE FIRM"} img="Busquedas.png" color="linear-gradient(180deg, rgba(32, 206, 173, 0) 10.94%, #20CEAD 100%)" />

         <div className={s.container} style={{backgroundColor:"#20CEAD"}}></div>

			<Footer />
		</>
	);
};




export default Block;
