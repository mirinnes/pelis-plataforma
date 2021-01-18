/* eslint-disable import/no-anonymous-default-export */
import {
	MOVIES_TRENDING_SET,
	SERIES_TRENDING_SET,
	SET_LOADING,
} from "../Types";

export default (state, action) => {
	switch (action.type) {
		case MOVIES_TRENDING_SET:
			return {
				...state,
				trendingMovies: action.payload,
				loading: false,
				messages: "La data TRENDING MOVIES a sido despachada!",
			};
		case SERIES_TRENDING_SET:
			return {
				...state,
				trendingSeries: action.payload,
				loading: false,
				messages: "La data TRENDING SERIES a sido despachada!",
			};
		case SET_LOADING:
			console.log("Loading ....");
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};
