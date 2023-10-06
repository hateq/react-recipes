import './RecipeInfo.scss';
import { useFavorites } from '../../hooks/useFavorites';
import { useActions } from '../../hooks/useActions';
import BackIcon from '../../../images/icons/back.svg';

const RecipeInfo = ({recipe, setSelectedRecipe}) => {
	const {favorites} = useFavorites();
	const {toggleFavorites} = useActions();
	const ingredientsArray = [recipe.strIngredient1, recipe.strIngredient2, recipe.strIngredient3, recipe.strIngredient4, recipe.strIngredient5, recipe.strIngredient6, recipe.strIngredient7, recipe.strIngredient8, recipe.strIngredient9, recipe.strIngredient10, recipe.strIngredient11, recipe.strIngredient12, recipe.strIngredient13, recipe.strIngredient14, recipe.strIngredient15,recipe.strIngredient16, recipe.strIngredient17, recipe.strIngredient18, recipe.strIngredient19, recipe.strIngredient20];
	const currentIngredientsArray = [];
	const ingredientsIndex = ingredientsArray.findIndex(item => item == '');
	for(let i = 0; i < ingredientsIndex; i++) {
		const measure = `recipe.strMeasure${i + 1}`;
		currentIngredientsArray.push({
			ingredient: ingredientsArray[i],
			measure: eval(measure),
			id: i
		})
	}
	const isExists = favorites.some(item => item.idMeal == recipe.idMeal);
	return ( 
		<div className="recipe-info">
			<div className="back">
				<div className="back-arrow" onClick={() => {
					setSelectedRecipe(null);
				}}>
					<img src={BackIcon} alt="" />
					<h6>BACK</h6>
				</div>
			</div>
			<div className="img-container"><img src={recipe.strMealThumb} alt="" /></div>
			<h2>{recipe.strMeal}</h2>
			<h3>{recipe.strCategory + ', ' + recipe.strArea}</h3>
			{recipe.strTags ? <h4>{recipe.strTags}</h4> : <></>}
			<ul>
				{currentIngredientsArray.map(item => {
					return <li key={item.id}>{item.ingredient + ', '}<span>{item.measure}</span></li>
				})}
			</ul>
			<p>
				{recipe.strInstructions}
			</p>
			<a href={recipe.strYoutube} target='_blank'>
				<h2 className='youtube'>Also you can watch video on <span>Youtube</span></h2>
			</a>
			<button onClick={() => {
				toggleFavorites(recipe)
			}}>{isExists ? 'Remove from ' : 'Add to '}favorites</button>
		</div>
	 );
}
 
export default RecipeInfo;