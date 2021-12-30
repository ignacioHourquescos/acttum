import s from './CardDetail.module.scss'
import Button from '../Button/Button'
import { useRouter } from "next/router";
const CardDetail = ({title, color}) =>{
   const router = useRouter();
  
   const getMoreDetail = () => {
      const fullPath = `/busquedas/analista`;
      router.push(fullPath);
   };

   return(
      // <div className={s.container} style={{backgroundColor:{color}}}>
       <div className={s.container}>
            <ul>
            <li>Mixto - GBA Sur (QUilmes) + Remoto</li>
            <li>Conocimiento en infraestructura de redes y telecomunicaciones</li>
            <li>Expereincia en Gestion de Proyectos</li>
            <li>Conociemientos de analisis de presupeustors y lectura de planos</li>
            <li>Beneficios: Prepaga + Comedor en planta + portal de beneficios en distintos rubros + capacitaciones</li>
            </ul>
            <div className={s.postularme} style={{color:"white", borderColor:color}} onClick={()=>getMoreDetail()}>Mas Detalle</div>
      </div>
   )
}


export default CardDetail