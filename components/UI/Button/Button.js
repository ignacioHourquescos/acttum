import s from './Button.module.scss'


const Button = ({label, link, color}) =>{

   return(
      <div className={s.container}
         style={{borderColor:color}}>
           {label}
      </div>
   )
}


export default Button