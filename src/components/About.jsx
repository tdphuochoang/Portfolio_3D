import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75, 0)}
				className="w-full bg-[#B5B4BC] p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-[#D7CEE4] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-[#111] text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const About = () => {
	return (
		<>
			<motion.div variants={textVariant(0, 0)}>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>

			<motion.p
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				variants={fadeIn("", "", 0.1, 1)}
			>
				I'm an ethusiastic full stack developer with solid experience in
				JavaScript and TypeScript, and expertise in frameworks such as React,
				Node.js, and MongoDB.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
