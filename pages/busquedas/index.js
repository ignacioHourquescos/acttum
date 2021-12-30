import HeaderSub from '../../components/HeaderSub/HeaderSub'

import s from './index.module.scss'
import Head from 'next/head'
import Footer from '../../components/Footer/Footer'
import useAppContext from "../../Context/UseAppContext";
import { Switch } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import Card from '../../components/UI/Card/Card'
import { createClient } from 'contentful'


const Block = () => {
   const { lang } = useAppContext();
   const { Search } = Input;
   const onSearch = value => console.log(value);
   const onChange = value => console.log(value);
	return (
		<>
			<Head>
				<title>ACTTUM HR</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Acttum HR" />
				<meta property="og:title" content="Acttum HR" />
				<meta property="og:description" content="Busquedas Laborales" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>

			<HeaderSub titulo={lang == "ESP" ? "BUSQUEDAS" : "THE FIRM"} img="Busquedas.png" color="linear-gradient(180deg, rgba(32, 206, 173, 0) 10.94%, #4F5150 100%)" />

         <div className={s.container} style={{backgroundColor:"#4F5150 "}}>

            <div className={s.filter_container}>
               <Search placeholder="input search text" onSearch={onSearch} style={{width: 200 }} />
               <br/>
               <div className={s.switch}>
               Remoto
               <Switch defaultChecked onChange={onChange} style={{ width: 50 }}/>
               Presencialvv
               </div>
            </div>


            <Card 
            title="Anlista Networking"
            location="CABA"
            date="Ultimos 3 dias"
            remote="remote"
            fullTime="full time"
            color="blue"            />
            
            <Card 
            title="Anlista Networking"
            location="CABA"
            date="Ultimos 3 dias"
            remote="remote"
            fullTime="full time"
            color="blue"            />
            
            <Card 
            title="Anlista Networking"
            location="CABA"
            date="Ultimos 3 dias"
            remote="remote"
            fullTime="full time"
            color="white"            />


         </div>

			<Footer />
		</>
	);
};




export default Block;
