import s from './AboutUs.module.scss'
import SectionTitle from '../UI/SectionTitle/SectionTitle'

const Hires = () =>{

   return(
      <div className={s.container}>
      <SectionTitle title="NOSOTROS" color="black"/>
         <div className={s.service}>
         Somos un equipo de recruiters especializados en procesos de
         selección de personal, dedicados a ayudar a compañías grandes,
         medianas y pequeñas a encontrar los talentos que necesitan.
         <br/> <br/>
         Realizamos búsquedas para distintas compañías de Argentina,
         resto de LATAM y USA.
         <br/> <br/>Nos destacamos por la agilidad en nuestros procesos,
         seguimiento y feedback constante.
         </div>
      </div>
   )
}


export default Hires

