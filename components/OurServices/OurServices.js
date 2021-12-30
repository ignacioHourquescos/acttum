import s from './OurServices.module.scss'
import SectionTitle from '../UI/SectionTitle/SectionTitle'

const Hires = () =>{

   return(
      <div className={s.container}>
      <SectionTitle title="NOSOTROS" color="black"/>
         <div className={s.service}>
         Proceso Completo: COntanos acerca del perfil que estas buscando 
         </div>
      </div>
   )
}


export default Hires

