import NavBar from './components/NavBar.js'
import './index.css';
import './App.css';

function App() {
	return (
		<div>
			<NavBar/>
			<p className="text-2xl font-bold leading-relaxed mt-0 mb-4 text-indigo-500 content-center flex justify-center ">Este es el desafio de NavBar Component</p><p className="flex justify-center text-base font-ligth leading-relaxed mt-0 mb-4 text-blue-500 content-center animate-ping">By Gaston Corvalan</p>
		</div>
	);
}

export default App;
