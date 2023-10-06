import { useSelector } from 'react-redux/es/hooks/useSelector';


export const useFavorites = () => {
	const favorites = useSelector(state => state.favorites);
	return {favorites};
}