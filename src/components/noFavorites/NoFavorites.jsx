import './NoFavories.scss';
import { Link } from 'react-router-dom';

const NoFavories = () => {
	return ( 
		<div className="no-favorites">
			<h2>No Favories</h2>
			<p>You can go to <Link to='/react-recipes/'><span>main page </span></Link>and find many beautiful Recipes</p>
		</div>
	 );
}
 
export default NoFavories;