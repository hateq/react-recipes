import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { favoritesSlice } from './favorites/favorites.slice';
import { api } from './api/api'

const reducers = combineReducers({
	favorites: favoritesSlice.reducer,
	[api.reducerPath]: api.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})