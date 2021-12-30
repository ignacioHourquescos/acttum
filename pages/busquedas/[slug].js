import { useRouter } from "next/router";
import s from "./slug.module.scss";
import { useRef, useState } from "react";
import ContactForm from "../../components/UI/ContactForm/ContactForm";

const Detail = ({ title, color }) => {
	const videoParentRef = useRef();
	const [showForm, setShowForm] = useState(false);
	const jobApply = () => {
		setShowForm(true);
      alert("hola")
	};

     
   const router = useRouter();
  
   const goHome = () => {
      const fullPath = `/busquedas`;
      router.push(fullPath);
   };

	return (
		<>
			<div className={s.back_to_home} onClick={() => goHome()}>
				<span>{goBack}</span>
			</div>

			{showForm ? 
				<>  

					<ContactForm />
             
				</>
			 : (
				<>
					<div className={s.container}>
						<div
							ref={videoParentRef}
							dangerouslySetInnerHTML={{
								__html: `<video width="100%" loop playsinline muted autoplay style="height:100%;object-fit:contain;" preload="metadata" controls/>
                                    <source src='/job.mp4'type="video/mp4" >
                                 </video>`,}}
						/>
					</div>

					<div className={s.job_description}>
						<div className={s.job_title}>Job Title</div>
						<div className={s.job_company}>La empresa</div>
						<div className={s.detail}>
							PDQ.com is a software company in the heart of downtown Salt Lake
							City. Our goal at PDQ.com is to make the lives of system
							administrators easier – and makes them look good. This is a fully
							remote position We’re looking for an experienced web developer who
							wants a large scope of ownership at a fast-growing, profitable
							company. We need someone with a growth mindset with a passion for
							building amazing front-end web applications to support our sales
							and marketing efforts.
						</div>
						<div className={s.job_what_you_do}>Que vas a estar haceindo</div>
                  <div className={s.detail}>
						Develop and deploy sales and marketing assets based on
						specifications from designers Use a broad range of tools and
						languages, primarily: React, Next.js, Contentful, Chakra, CSS Build
						and maintain systems for testing our website for stability and
						reliability Work closely with other teams: design, SEO, digital
						marketing, sales, and others Build systems and components that can
						be reused across pages with different themes and defined
						requirements Launch conversion rate optimizations and A/B tests
						Effectively meet set deadlines and anticipate roadblocks and
						development opportunities.
                  </div>
						<div className={s.job_what_you_need}>Que necesitas</div>
                  <div className={s.detail}>
						What you bring to the table: 5+ years of front-end development
						experience, ideally in a high-growth SaaS company Expert
						understanding of HTML, CSS, and JavaScript best practices Bachelor’s
						degree, or equivalent experience, in Information Systems, Computer
						Science, or another related degree Experience working with a
						headless CMS (Contentful preferred) Desire to take ownership of the
						code base and help architech the components, systems, and tests that
						will scale Ability to write stable, scaleable, extensible and
						reusable components to help keep up with growing demands on the
						websites Ability to organize, prioritize, and meet deadlines PDQ.com
						has been recognized as one of “Utahs Best Places to Work,” by Utah
						Business Magazine. We offer amazing perks and benefits like a four
						day work week, 6% match to your 401k, and all of your benefits
						premiums paid for you and your family, and much much more. PDQ.com
						is an equal opportunity employer. We do not discriminate on the
						basis of race, religion, color, national origin, gender, sexual
						orientation, gender identity, age, marital status, veteran status,
						or disability status.
                  </div>
					</div>

					<div className={s.job_apply_button_container} onClick={() => jobApply()}>
						<div className={s.job_apply_button} onClick={() => jobApply()}>Aplicar</div>
					</div>
				</>
			)}
		</>
	);
};

export default Detail;

const goBack = (
	<svg
		width="33"
		height="23"
		viewBox="0 0 33 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="1.5"
			y1="11.5007"
			x2="31.5"
			y2="11.5007"
			stroke="white"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<line
			x1="2"
			y1="10.565"
			x2="10.565"
			y2="1.99999"
			stroke="white"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<path
			d="M2 12L10.565 20.565"
			stroke="white"
			strokeWidth="3"
			strokeLinecap="round"
		/>
	</svg>
);
