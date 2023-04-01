import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { contactAvatar, contactAvatar2 } from "../assets";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const publicKey = import.meta.env.VITE_PULBIC_KEY;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const formRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		if (!form.name.length || !form.email.length || !form.message.length) {
			alert("Please fill out all the information");
			setLoading(false);
		} else {
			emailjs
				.send(
					serviceId,
					templateId,
					{
						from_name: form.name,
						to_name: "Hoang",
						from_email: form.email,
						to_email: "tdll.trdphoang@gmail.com",
						message: form.message,
					},
					publicKey
				)
				.then(
					() => {
						setLoading(false);
						alert("Thank you! I will get back to you as soon as possible.");

						{
							/*Reset form*/
						}
						setForm({
							name: "",
							email: "",
							message: "",
						});
					},
					(error) => {
						setLoading(false);

						console.log(error);
						alert("Something went wrong.");
					}
				);
		}
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden mt-10">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-gradient-to-b from-indigo-300 to-slate-900 p-8 rounded-2xl sm:rounded-none sm:rounded-tl-2xl sm:rounded-bl-2xl "
			>
				{/* <p className={`${styles.sectionSubText} text-[#fff]`}>Get in touch</p> */}
				<h3 className={styles.sectionHeadText}>Contact</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					{/* Name */}
					<label className="flex flex-col">
						<span className="text-[#D7CEE4] font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-forminput py-4 px-6 placeholder:text-secondary text-black rounded-lg outined-none border-none font-medium"
						/>
					</label>
					{/* Email */}
					<label className="flex flex-col">
						<span className="text-[#D7CEE4] font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-forminput py-4 px-6 placeholder:text-secondary text-black rounded-lg outined-none border-none font-medium"
						/>
					</label>
					{/* Message */}
					<label className="flex flex-col">
						<span className="text-[#D7CEE4] font-medium mb-4">
							Your Message
						</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-forminput py-4 px-6 placeholder:text-secondary text-black rounded-lg outined-none border-none font-medium"
						/>
					</label>
					<div className="flex justify-between">
						<button
							type="submit"
							className="bg-[#85C9A7] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-black rounded-xl"
						>
							{loading ? "Sending..." : "Send"}
						</button>
						<ul className="flex gap-5 items-center">
							<li className="text-[25px]">
								<a
									href="https://www.linkedin.com/in/tdphuochoang/"
									target="_blank"
								>
									<FaLinkedin />
								</a>
							</li>
							<li className="text-[25px] ">
								<a href="https://github.com/tdphuochoang" target="_blank">
									<FaGithub />
								</a>
							</li>
							<li className="text-[25px] ">
								<a
									href="https://www.facebook.com/tdphuochoang/"
									target="_blank"
								>
									<FaFacebook />
								</a>
							</li>
							<li className="text-[25px]">
								<a href="https://www.instagram.com/tdphoang/" target="_blank">
									<FaInstagram />
								</a>
							</li>
						</ul>
					</div>
				</form>
			</motion.div>

			{/*Contact Avatar*/}
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] hidden xl:flex h-full flex-col  rounded-tr-2xl rounded-br-xl overflow-hidden relative"
			>
				<div>
					<img
						src={contactAvatar2}
						alt="myAvatar"
						className=" w-full h-full object-cover"
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
