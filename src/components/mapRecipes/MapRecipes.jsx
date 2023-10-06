import './MapRecipes.scss';
import RecipesCard from '../recipesCard/RecipesCard';

const MapRecipes = ({recipes, setSelectedRecipe}) => {
	return ( 
		<div className="recipes-list">
		{recipes.map(recipe => {
		return <RecipesCard key={recipe.idMeal} recipe={recipe} setSelectedRecipe={setSelectedRecipe}/>
		})}
		</div>
	 );
}
 
export default MapRecipes;