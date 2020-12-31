import React, { useContext, useEffect } from "react";
import CarrouselCards from "./components/common/CarrouselCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GridWithPages from "./components/common/GridWithPages";
import SingleMovie from "./components/pages/SingleMovie";
import PopularMovies from "./components/layout/PopularMovies";
import BestCritic from "./components/layout/BestCritic";
import ApiContext from "./components/context/apiContext";

import "./App.scss";

function App() {
	const { getPopularMovies, data } = useContext(ApiContext);
	useEffect(() => {
		getPopularMovies();
	}, []);
	return (
		<Router>
			<section className='main-section'>
				<Switch>
					<Route exact path='/'>
						<PopularMovies data={data} />
						<BestCritic data={data} />

						<CarrouselCards
							cardsTitle='Peliculas a estrenarse'
							pagePath='upcoming'
							data={data}
						/>
					</Route>

					<Route exact path={`/movie/popular/page/1`}>
						<GridWithPages pageTitle='Películas Populares' />
					</Route>
					<Route exact path={`/movie/top_rated/page/1`}>
						<GridWithPages pageTitle='Películas con mejores críticas' />
					</Route>
					<Route exact path={`/movie/upcoming/page/1`}>
						<GridWithPages pageTitle='Peliculas a estrenarse' />
					</Route>
					<Route exact path={`/pelicula`}>
						<SingleMovie />
					</Route>
				</Switch>
			</section>
		</Router>
	);
}

export default App;
