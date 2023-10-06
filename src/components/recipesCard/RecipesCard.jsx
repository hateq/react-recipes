import './RecipesCard.scss';
import { useFavorites } from '../../hooks/useFavorites';
import { useActions } from '../../hooks/useActions';

const RecipesCard = ({recipe, setSelectedRecipe}) => {
	const {favorites} = useFavorites();
	const {toggleFavorites} = useActions();
	const isExists = favorites.some(item => item.idMeal == recipe.idMeal)
	return ( 
		<div className="recipes-card">
			<div className="img-container">
				<img src={recipe.strMealThumb} alt="" />
			</div>
			<h2>{recipe.strMeal}</h2>
			<p>{recipe.strCategory + ', ' + recipe.strArea}</p>
			<div className="card-buttons">
				<button onClick={() => toggleFavorites(recipe)} className='button-favorites'>{isExists ? 'Remove from ' : 'Add to '}favorites</button>
				<button className='button-view' onClick={() => {
					setSelectedRecipe(recipe);
				}}>View more</button>
			</div>
		</div>
	 );
}
 
export default RecipesCard;