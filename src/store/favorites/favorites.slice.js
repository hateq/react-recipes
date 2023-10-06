import { createSlice } from '@reduxjs/toolkit';

const localStorageValue = JSON.parse(localStorage.getItem('favorites-recipes'));
const initialState = localStorageValue ? localStorageValue : [];
export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, {payload: recipe}) => {
			const isExists = (state.some(r => r.idMeal == recipe.idMeal))
			if (isExists) {
				const index = state.findIndex(item => item.idMeal == recipe.idMeal)
				if (index !==-1) {
				state.splice(index, 1);
				localStorage.setItem('favorites-recipes', JSON.stringify(state))
				}
			} else {
				state.push(recipe);
				localStorage.setItem('favorites-recipes', JSON.stringify(state))
			}
		},
		removeFavorites: (state, {payload: recipe}) => {
			state.filter(r => r.idMeal !== recipe.idMeal)
		}
	}
})