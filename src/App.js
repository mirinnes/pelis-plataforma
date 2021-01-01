import React, { useContext, useEffect } from "react";
import CarrouselCards from "./components/common/CarrouselCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GridWithPages from "./components/common/GridWithPages";
import SingleMovie from "./components/pages/SingleMovie";
import PopularMovies from "./components/layout/PopularMovies";
import BestCritic from "./components/layout/BestCritic";
import Tendency from "./components/layout/Tendency";
import ApiContext from "./components/context/apiContext";

import "./App.scss";

function App() {
	const {
		trendingMovies,
		trendingSeries,
		dataMovies,
		dataTv,
		SERIES_TRENDING_SET,
		MOVIES_TRENDING_SET,
		getTrending,
	} = useContext(ApiContext);

	useEffect(() => {
		getTrending("movie", MOVIES_TRENDING_SET);
		getTrending("tv", SERIES_TRENDING_SET);
	}, []);
	return (
		<Router>
			<section className='main-section'>
				<Switch>
					<Route exact path='/'>
						<Tendency
							data={trendingMovies}
							pagePath='trending/movie'
							title={"Peliculas que son tendencia"}
						/>
						<Tendency
							data={trendingSeries}
							pagePath='trending/tv'
							title={"Series que son tendencia"}
						/>
					</Route>
					<Route exact path='/movie'>
						<PopularMovies data={dataMovies} />
						<BestCritic data={dataMovies} />

						<CarrouselCards
							cardsTitle='Peliculas a estrenarse'
							pagePath='upcoming'
							data={dataMovies}
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
