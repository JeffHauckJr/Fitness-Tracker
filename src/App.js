import "./App.css";
import Navigation from "./components/Nav";
import Pages from "./components/Pages";
import User from "./components/User";


function App() {
	return (
		<div className="App">
			<header className='header'>
				<Navigation />
			</header>
			<main style={{ marginTop: "100px", display: 'flex' , justifyContent: 'center' }}>
				<Pages />
			</main>
      		<footer className='footer'>
        			<User />
     		 </footer>
		</div>
	);
}

export default App;