import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Shop</p>
				<p className="App-link"> Un E-commerce para usar en Kioskos automatizados y roboticos.</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub Gastoncorvata
				</a>
			</header>
		</div>
	);
}

export default App;
