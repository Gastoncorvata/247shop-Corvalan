import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Switch>

					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/categority/:categorityId">
						<ItemListContainer greeting="Bienvenidos"/>
					</Route>

					<Route path="/item/:itemId">
						<ItemDetailContainer />
					</Route>

					<Route path="*">
						<img src="https://image.freepik.com/vector-gratis/pagina-error-404-distorsion_23-2148105404.jpg" alt="Page not found" />
					</Route>

				</Switch>				
			</div>
		</BrowserRouter>
		
	);
}

export default App;
