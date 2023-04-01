import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
} from "./components";

const App = () => {
	return (
		<BrowserRouter className="App">
			<div className="relative z-0 bg-primary">
				<div className="bg-[#fff] bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
