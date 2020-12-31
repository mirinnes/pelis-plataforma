import React, { useReducer } from "react";
import axios from "axios";
import ApiContext from "./apiContext";
import ApiReducer from "./apiReducer";
import { GET_POPULAR_MOVIES, SET_LOADING } from "../Types";

// let ApiClientId;
// let ApiClientSecret;

// Check de environment
// if (process.env.NODE_ENV !== "production") {
// 	ApiClientId = process.env.REACT_APP_Api_CLIENT_ID;
// 	ApiClientSecret = process.env.REACT_APP_Api_CLIENT_SECRET;
// } else {
// 	ApiClientId = process.env.Api_CLIENT_ID;
// 	ApiClientSecret = process.env.Api_CLIENT_SECRET;
// }

const ApiState = ({ children }) => {
	const initialState = {
		data: undefined,
		selected: {},
		loading: false,
		messages: "Hola soy un mensaje",
	};

	const [state, dispatch] = useReducer(ApiReducer, initialState);

	// Get Popular Movies
	const getPopularMovies = async () => {
		setLoading();
		const res = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=967bd57c74714dc1023372ea38d75e43&page=1`
		);
		console.log("La data es", res.data);
		dispatch({
			type: GET_POPULAR_MOVIES,
			payload: res.data,
		});
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ApiContext.Provider
			value={{
				data: state.data,
				selected: state.selected,
				loading: state.loading,
				messages: state.messages,
				getPopularMovies,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};

export default ApiState;
