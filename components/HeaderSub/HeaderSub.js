import React from 'react'
import s from './HeaderSub.module.scss'
import { useRouter } from "next/router";
 const HeaderSub = ({ titulo, img, color}) => {

   const router = useRouter();

	const goHome = () => {
		const fullPath = `/`;
		router.push(fullPath);
	};
		return (<>

   
			<div className={s.container} style={{ backgroundImage: `url("/${img}")`}}>
         
         <div className={s.overlay} style={{background: color}}></div>
				 <div className={s.back_to_home}  onClick={()=>goHome()}>
					<span>{miniLogo}</span>
				</div> 

				<div className={s.headersub_title}>
					{/* <div className={s.logo_red_icon}>{logoRedIcon}</div> */}
					<h1>{titulo}</h1>
				</div>

			</div>
		</>);
 };


export default HeaderSub;


const logoRedIcon = <svg width="40" height="40" viewBox="0 0 82 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.3982 24.8256L58.1443 32.1527L67.1331 41.2322L40.8206 67.8104L14.5078 41.2322L40.8206 14.6542L50.8777 24.8128L58.1316 17.486L40.8206 0L0 41.2322L40.8206 82.4644L81.6409 41.2322L65.3982 24.8256Z" fill="#AF1B26"/>
<path d="M65.4741 24.6787L58.2075 17.3391L65.4741 9.9992L72.7404 17.3391L65.4741 24.6787Z" fill="#F9303E"/>
</svg>

const miniLogo = <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_627_267)">
<circle r="6.51037" transform="matrix(1 0 0 -1 10.5104 24.8351)" fill="white"/>
<path d="M25.6442 24.8968C25.4464 15.3236 19.0774 7.59136 25.286 7.56293C31.4946 7.5345 36.688 15.2721 36.8859 24.8453C37.0837 34.4186 32.2111 42.2022 26.0025 42.2307C19.7939 42.2591 25.8421 34.47 25.6442 24.8968Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_627_267" x="0" y="7.56274" width="40.8926" height="42.668" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacitycity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_627_267"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_627_267" result="shape"/>
</filter>
</defs>
</svg>



