import Header from '../../header/Header';
import './FavoritesPage.scss';
import { useFavorites } from '../../../hooks/useFavorites';
import RecipesCard from '../../recipesCard/RecipesCard';
import RecipeInfo from '../../recipeInfo/RecipeInfo';
import { useState } from 'react'
import MapRecipes from '../../mapRecipes/MapRecipes'
import NoFavories from '../../noFavorites/NoFavorites'

const FavoritesPage = () => {
	const {favorites} = useFavorites();
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	return ( 
		<>
		<Header page='favorites'/>
		<div className="favorites">
		{selectedRecipe ? <RecipeInfo recipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe}/> : 
		favorites.length !== 0 ? 
		<MapRecipes recipes={favorites} setSelectedRecipe={setSelectedRecipe}/>
		: 
		<NoFavories/>
		}
		</div>
		</>
	 );
}
 
export default FavoritesPage;