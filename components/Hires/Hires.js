import s from "./Hires.module.scss";
import Card from "../UI/Card/Card";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import Button from "../UI/Button/Button";
import background from "../../public/background.png";
const Hires = () => {
	return (
		<div className={s.container}>
			<SectionTitle title="BUSQUEDAS"  style={{backgroundImage:`url("${image}")`}}/>
			{/* <div className={s.overlay}/> */}

			<Card
				title="titulo pureba"
				location="capital"
				date="noviebre"
				remote="remote"
				fullTime="full time"
				color={color.turquoise}
			/>

			<Card
				title="titulo pureba"
				location="capital"
				date="noviebre"
				remote="remote"
				fullTime="full time"
				color={color.grey}
			/>

			<Card
				title="titulo pureba"
				location="capital"
				date="noviebre"
				remote="remote"
				fullTime="full time"
				color={color.blue}
			/>
			<Card
				title="titulo pureba"
				location="capital"
				date="noviebre"
				remote="remote"
				fullTime="full time"
				color={color.white}
			/>
			<Card
				title="titulo pureba"
				location="capital"
				date="noviebre"
				remote="remote"
				fullTime="full time"
				color={color.white}
			/>
         <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
			<Button color="white" label="Búsquedas" link="/" />
         </div>
		</div>
	);
};

export default Hires;

const color = {
	turquoise: "rgba(32, 206, 173, 1)",
	grey: "rgba(91, 91, 91, 1)",
	blue: "rgba(45, 92, 177, 1)",
	white: "rgba(243, 243, 243, 1)",
};





const image = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E"

//background-color: #000000;
//background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");