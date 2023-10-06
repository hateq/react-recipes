import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { favoritesSlice } from '../store/favorites/favorites.slice';
const rootActions = {
	...favoritesSlice.actions
}
export const useActions = () => {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(rootActions,dispatch), [dispatch])
}