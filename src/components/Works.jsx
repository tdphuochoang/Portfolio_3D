import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	isMobile,
}) => {
	return (
		<motion.div
			variants={
				isMobile
					? fadeIn("up", "spring", index * 0.5, 0.75, 1)
					: fadeIn("up", "spring", index * 0.5, 0.75, 1)
			}
		>
			<Tilt
				options={{ max: 20, scale: 1, speed: 450 }}
				className="bg-tertiary p-5 rounded-2xl w-full xs:w-[360px] relative"
			>
				<div className="w-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
				{/* Github button*/}
				<div
					onClick={() => window.open(source_code_link, "_blank")}
					className="absolute bottom-5 right-5 bg-[#F69501] w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
				>
					<img
						src={github}
						alt="github"
						className="w-2/3 h-2/3 object-contain"
					/>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-primary text-[14px]">{description}</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		//Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 600px)");

		//Set the initial isMobile state variable
		setIsMobile(mediaQuery.matches);

		//Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		//Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		//Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
	return (
		<>
			<motion.div variants={textVariant(0, 1)}>
				<p className={styles.sectionSubText}>My Work</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Welcome to my Projects section! Here you will find a collection of
					some of my most notable projects, showcasing my skills and expertise
					in Web Development. Each project has a unique story and set of
					challenges that I tackled with creativity and precision. Whether it's
					built with plain JavaScript or with React, I am passionate about
					delivering high-quality work that not only meets but exceeds
					expectations.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						{...project}
						index={index}
						isMobile={isMobile}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
