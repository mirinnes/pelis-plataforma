import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GridWithPages from "./components/common/GridWithPages";
import PopularMovies from "./components/layout/PopularMovies";
import BestCritic from "./components/layout/BestCritic";
import Tendency from "./components/layout/Tendency";
import ApiContext from "./components/context/apiContext";
import Header from "./components/common/Header";
import "./App.scss";

function App() {
	const {
		trendingMovies,
		trendingSeries,
		dataMovies,
		SERIES_TRENDING_SET,
		MOVIES_TRENDING_SET,
		getTrending,
		dataTv,
	} = useContext(ApiContext);

	useEffect(() => {
		getTrending("movie", MOVIES_TRENDING_SET);
		getTrending("tv", SERIES_TRENDING_SET);
	}, [MOVIES_TRENDING_SET, SERIES_TRENDING_SET, getTrending]);
	return (
		<Router>
			<Header />
			<section className='main-section'>
				<Switch>
					<Route exact path='/'>
						<Tendency
							data={trendingMovies}
							pagePath='movie/trending'
							title={"Peliculas que son tendencia"}
						/>
						<Tendency
							data={trendingSeries}
							pagePath='tv/trending'
							title={"Series que son tendencia"}
						/>
					</Route>
					<Route exact path='/movie'>
						<PopularMovies data={dataMovies} />
						<BestCritic data={dataMovies} />
					</Route>
					<Route exact path='/tv'>
						<PopularMovies data={dataTv} />
						<BestCritic data={dataTv} />
					</Route>

					{/**
					 * Routes for movies' sections
					 */}
					<Route exact path={`/movie/trending/page/1`}>
						<GridWithPages
							pageTitle='Películas que son tendencia'
							data={trendingMovies}
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

					{/**
					 * Routes for tv' sections
					 */}

					<Route exact path={`/tv/trending/page/1`}>
						<GridWithPages
							pageTitle='Películas que son tendencia'
							data={trendingSeries}
						/>
					</Route>
					<Route exact path={`/tv/popular/page/1`}>
						<GridWithPages pageTitle='Series Populares' />
					</Route>
					<Route exact path={`/tv/top_rated/page/1`}>
						<GridWithPages pageTitle='Series con mejores críticas' />
					</Route>
					<Route exact path={`/tv/upcoming/page/1`}>
						<GridWithPages pageTitle='Series al aire' />
					</Route>
				</Switch>
			</section>
		</Router>
	);
}

export default App;
