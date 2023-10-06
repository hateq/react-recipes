import {Route, Routes} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import FavoritesPage from './FavoritesPage/FavoritesPage';
import ErrorPage from './ErrorPage/ErrorPage';

const Pages = () => {
	return ( 
		<>
		<Routes>
			<Route path='/react-recipes/' element={<MainPage/>}/>
			<Route path='/react-recipes/favorites' element={<FavoritesPage/>}/>
			<Route path='*' element={<ErrorPage/>}/>
		</Routes>
		</>
	 );
}
 
export default Pages;