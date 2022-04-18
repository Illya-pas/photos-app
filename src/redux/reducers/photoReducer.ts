import {
	PHOTOS_FETCH,
	PHOTOS_PAGE_AMOUNT,
	PHOTOS_PAGINATE
} from "../actionTypes";
import {PhotosReducerState} from "../types"

const initialState: PhotosReducerState = {
  photos: [],
  paginatedPhotos: [],
	pageAmount: 0
}

export const photoReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case PHOTOS_FETCH:
			return {
				...state,
				photos: action.payload,
			};

		case PHOTOS_PAGE_AMOUNT:
			return {
				...state,
				pageAmount: action.payload,
			};
		case PHOTOS_PAGINATE:
			return {
				...state,
				paginatedPhotos: action.payload,
			};

		// case DEL_ITEM_CART:
		// 	const newCart = [...state.cart];
		// 	newCart.splice(action.payload, 1);
		// 	return {
		// 		...state,
		// 		cart: newCart,
		// 	};

		// case COUNT_TOTAL:
		// 	let counter = 0;
		// 	let count = 0;
		// 	state.cart.map((singleCartItem) => {
		// 		counter += singleCartItem.price * singleCartItem.amount;
		// 		count += singleCartItem.amount;
		// 	});
		// 	return {
		// 		...state,
		// 		total: counter,
		// 		amount: count,
		// 	};

		// case CHANGE_AMOUNT:
		// 	return { ...state, cart: action.payload };

		default:
			return state;
	}
};