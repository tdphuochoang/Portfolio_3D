import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);
	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon, name }) => {
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		let timeoutId;

		if (showText) {
			timeoutId = setTimeout(() => {
				setShowText(false);
			}, 2000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [showText]);

	const handleClick = () => {
		setShowText(true);
	};
	return (
		<>
			{showText && (
				<div className="relative z-10 flex justify-center items-center transition duration-300">
					<div
						className={`absolute bottom-0 w-auto opacity-${
							showText ? "100" : "0"
						} transition duration-3000`}
					>
						<div className="bg-white shadow-md rounded-md p-3 transition duration-3000">
							<p className="text-gray-700 transition duration-3000">{name}</p>
						</div>
					</div>
				</div>
			)}
			<Canvas
				frameloop="demand"
				gl={{ preserveDrawingBuffer: true }}
				onClick={handleClick}
			>
				<Suspense fallback={<CanvasLoader />}>
					<OrbitControls enableZoom={false} />
					<Ball imgUrl={icon} />
				</Suspense>
				<Preload all />
			</Canvas>
		</>
	);
};
export default BallCanvas;
