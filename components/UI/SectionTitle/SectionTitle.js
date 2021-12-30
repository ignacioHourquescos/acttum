import s from './SectionTitle.module.scss'


const SectionTitle = ({title, color}) =>{

   return(
      // <div className={s.container} style={{backgroundColor:{color}}}>
       <div className={s.container}>
            <h1 className={s.title} style={{color:color}}>{title}</h1>
           
      </div>
   )
}


export default SectionTitle