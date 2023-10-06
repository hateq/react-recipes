import { useState } from 'react'
import Header from '../../header/Header';
import SearchForm from '../../searchForm/SearchForm'
import './MainPage.scss';
import RecipesList from '../../recipesList/RecipesList';
import RecipeInfo from '../../recipeInfo/RecipeInfo.jsx';

const MainPage = () => {
	const [searchValue, setSearchValue] = useState('');
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedArea, setSelectedArea] = useState(null);
	const [selectedRecipe, setSelectedRecipe] = useState(null);
	return ( 
		<>
		<Header page='main'/>
		{selectedRecipe ?
		<RecipeInfo recipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe}/> :
			<>
		<SearchForm searchValue={searchValue} setSearchValue={setSearchValue} setSelectedCategory={setSelectedCategory} setSelectedArea={setSelectedArea}/>
		<RecipesList searchValue={searchValue} setSelectedRecipe={setSelectedRecipe} selectedCategory={selectedCategory} selectedArea={selectedArea}/>
			</>
	}

		</>
	 );
}
 
export default MainPage;