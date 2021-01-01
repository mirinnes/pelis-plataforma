import React, { useReducer } from "react";
import axios from "axios";
import ApiContext from "./apiContext";
import ApiReducer from "./apiReducer";
import {
	MOVIES_TRENDING_SET,
	SERIES_TRENDING_SET,
	SET_LOADING,
} from "../Types";

const ApiState = ({ children }) => {
	const initialState = {
		trendingMovies: undefined,
		trendingSeries: undefined,
		dataMovies: undefined,
		dataTv: undefined,
		selected: undefined,
		loading: false,
		messages: "Hola soy un mensaje",
	};

	const [state, dispatch] = useReducer(ApiReducer, initialState);

	// Get Trending {media_type}
	const getTrending = async (media_type, dispatch_type) => {
		setLoading();
		console.log(
			"Iniciando llamada a la api para ",
			media_type,
			"y con el dispatch type",
			dispatch_type
		);
		const res = await axios.get(
			`https://api.themoviedb.org/3/trending/${media_type}/week?api_key=967bd57c74714dc1023372ea38d75e43`
		);
		console.log("La API respondio en getTrending:", media_type, res.data);
		dispatchData(dispatch_type, res.data);
	};

	// Dispatch data {type}
	const dispatchData = (type, data) => {
		setLoading();
		console.log("Despachando DATA en dispatchData", type, data);
		dispatch({
			type,
			payload: data,
		});
	};
	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ApiContext.Provider
			value={{
				trendingMovies: state.trendingMovies,
				trendingSeries: state.trendingSeries,
				dataMovies: state.dataMovies,
				dataTv: state.dataTv,
				selected: state.selected,
				loading: state.loading,
				messages: state.messages,
				MOVIES_TRENDING_SET,
				SERIES_TRENDING_SET,
				getTrending,
				dispatchData,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};

export default ApiState;
