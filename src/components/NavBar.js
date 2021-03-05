import React from "react";

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-orange-500 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
					<a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white opacity-90" href="#marca">
						<span className="text-purple-500">[</span>24<span className="text-yellow-500">]</span>7 Shop
					</a>
					<button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
						<span className="block relative w-6 h-px rounded-sm bg-white"></span>
						<span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
						<span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
					</button>
					</div>
					<div className="lg:flex flex-grow items-center" id="example-navbar-warning">
					<ul className="flex flex-col lg:flex-row list-none mr-auto">
						<li className="nav-item">
							<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#carrito">
								<i className="fas fa-shopping-cart text-lg leading-lg text-white opacity-75" />
								<span className="ml-2">Carrito</span>
							</a>
						</li>						
						<li className="nav-item">
						<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#instagram">
							<i className="fab fa-instagram text-lg leading-lg text-white opacity-75" />
							<span className="ml-2">Siguenos</span>
						</a>
						</li>
							<li className="nav-item">
						<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#facebook">
							<i className="fab fa-facebook text-lg leading-lg text-white opacity-75" />
							<span className="ml-2">Comparte</span>
						</a>
						</li>					
					</ul>
					<div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
						<div className="flex">
						<span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-orange-600 rounded-full text-sm bg-orange-100 items-center rounded-r-none pl-2 py-1 text-orange-800 border-r-0 placeholder-orange-300">
							<i className="fas fa-search"></i>
						</span>
						</div>
						<input type="text" className="px-2 py-1 h-8 border border-solid  border-orange-600 rounded-full text-sm leading-snug text-orange-700 bg-orange-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-orange-300" placeholder="Buscar Producto o Marca" />
					</div>
					</div>
				</div>
			</nav>
		</>
	);
}
