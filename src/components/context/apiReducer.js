/* eslint-disable import/no-anonymous-default-export */
import {
	GET_POPULAR_MOVIES,
	SET_LOADING,
} from "/dev/AdaTps/TP-React-PeliPlataforma/src/components/Types";

export default (state, action) => {
	switch (action.type) {
		case GET_POPULAR_MOVIES:
			return {
				...state,
				data: action.payload,
				loading: true,
				messages: "La data a sido despachada!",
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
