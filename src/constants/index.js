import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	mySQL,
	bootstrap,
	docker,
	sass,
	threejs,
	tcclogo,
	sdsuLogo,
	bcfLogo,
	galleryBlogProject,
	eCommerceWebsite,
	TravelMap,
	BookingClone,
	NanaRestaurant,
	PlaceStation,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Software Engineer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "SASS",
		icon: sass,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "MySQL",
		icon: mySQL,
	},
	{
		name: "Bootstrap",
		icon: bootstrap,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Student",
		company_name: "Tacoma Community College",
		icon: tcclogo,
		iconBg: "#fff",
		date: "Sep 2014 - Jun 2017",
		points: [
			"Degree: Associate Degree",
			"Major: Computer Science",
			"GPA: 3.25",
			" Honors: Dean's List, 2016 - 2017",
		],
	},
	{
		title: "Student",
		company_name: "San Diego State University",
		icon: sdsuLogo,
		iconBg: "#E6DEDD",
		date: "Aug 2017 - Dec 2021",
		points: [
			"Degree: Bachelor of Science",
			"Major: Computer Science",
			"GPA: 3.12",
			" Honors: Dean's List, 2018 - 2019",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "BeaconFire Inc",
		icon: bcfLogo,
		iconBg: "#84A1D4",
		date: "May 2022 - Dec 2022",
		points: [
			" Developed an onboarding application using ReactJS and Redux along with a Node.js backend supported by a MongoDB database",
			"Created new custom interfaces for users using HTML, CSS, and JavaScript.",
			"Created an online sandbox for users to code with a live preview and implemented a live checklist to give instant feedback.",
			"Assured cross-browser compatibility & responsiveness on all device sizes using Media Query.",
			"Implemented lazy loaded component, saving 0.5 seconds on the application load-time.",
			" Implemented RESTful API with middleware for protected routes and roles.",
			" Transitioned from React Context API to Redux.",
			" Held myself accountable by creating deadlines using SCRUM methodology.",
		],
	},
];

const projects = [
	{
		name: "Gallery Blog",
		description:
			"A web-based platform that allows users to showcase their pieces of art and photography ranging from breathtaking landscapes to thought-provoking abstract pieces.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "sanity",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: galleryBlogProject,
		source_code_link: "https://github.com/tdphuochoang/GalleryBlog",
	},
	{
		name: "MyStore",
		description:
			"An E-Commerce website that provides users with a seamless shopping experience, where they can easily browse through a wide range of products, add them to the cart, and complete the purchase with just a few clicks.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "strapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: eCommerceWebsite,
		source_code_link: "https://github.com/tdphuochoang/E-Commerce-App",
	},
	{
		name: "Travel Map",
		description:
			"A user-friendly map-based platform, powered by Mapbox, that enables users to mark their favorite locations, create pins, attach descriptions, and share them with the world.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mapbox",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
		],
		image: TravelMap,
		source_code_link: "https://github.com/tdphuochoang/MERN-TravelMap",
	},
	{
		name: "Booking Website",
		description:
			"A clone of Booking.com website that allows users to search and book a cozy vacation stay at a luxury or a budget-friendly hostel in the city of their choice prior to the traveling date.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
		],
		image: BookingClone,
		source_code_link:
			"https://github.com/tdphuochoang/WebDevelopment/tree/main/React/my-booking-app",
	},
	{
		name: "Nana's Restaurant",
		description:
			"Authentic Vietnamese restaurant website that showcases the best of Vietnamese cuisine. The menu is designed to provide users with a seamless and enjoyable user experience.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: NanaRestaurant,
		source_code_link:
			"https://github.com/tdphuochoang/WebDevelopment/tree/main/JavaScript%20Vanilla%20Projects/Advanced/Restaurant%20Website",
	},
	{
		name: "PlaceStation",
		description:
			"A stunning homepage design for a platform that enables users to easily search and browse through an extensive collection of luxury villa and penthouse rentals in some of the most sought-after cities across the US.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "styled-components",
				color: "green-text-gradient",
			},
		],
		image: PlaceStation,
		source_code_link:
			"https://github.com/tdphuochoang/WebDevelopment/tree/main/React/real_estate_v1",
	},
];

export { services, technologies, experiences, projects };
