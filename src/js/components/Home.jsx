import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="container d-flex justify-content-between mt-4 p-0">
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>



		</div>
	);
};

export default Home;