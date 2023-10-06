import { useGetAllRecipesQuery } from '../../store/api/api';
import Loader from '../UI/loader/Loader'
import StartWriting from '../startWriting/StartWriting'
import NoRecipes from '../noRecipes/NoRecipes';
import MapRecipes from '../mapRecipes/MapRecipes'

const RecipesList = ({searchValue, setSelectedRecipe, selectedCategory, selectedArea}) => {
	const {data, status} = useGetAllRecipesQuery(searchValue);
	const getRecipes = () => {
		try {
			return data.meals.filter(recipe => {
				if (selectedCategory) {
					return recipe.strCategory == selectedCategory
				} else {
					return recipe;
				}
			}).filter(recipe => {
				if (selectedArea) {
					return recipe.strArea == selectedArea;
				} else {
					return recipe;
				}
			}) || [];
		} catch {}
	}
	const currentRecipes = getRecipes();
	return ( 
		<div>
			{ searchValue.length == 0 ?
			<StartWriting/> :
			currentRecipes ?
				status == 'pending' ? <Loader/> :
				currentRecipes.length !== 0 ?
				 <MapRecipes recipes={currentRecipes} setSelectedRecipe={setSelectedRecipe}/>
				 : <NoRecipes/> : <NoRecipes/>
			}
		</div>
	 );
}
 
export default RecipesList;