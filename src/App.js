import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import './index.css';
import './App.css';

function App() {
	return (
		<div>
			<NavBar/>
			<ItemDetailContainer />
			<ItemListContainer greeting="Bienvenidos"/>
			
		</div>
	);
}

export default App;
