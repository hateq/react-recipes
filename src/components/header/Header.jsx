import './Header.scss';
import Logo from '../../../logo.png';
import ThemeToggler from '../themeToggler/ThemeToggler'
import { Link } from 'react-router-dom';

const Header = ({page}) => {
	return ( 
		<header>
			<nav className="nav">
				<ThemeToggler/>
				<Link to='/'>
				<img src={Logo} alt="" className='logo-img'/>
				</Link>
				<Link to='/favorites'>
					<h2 className={page == 'favorites' ? 'header-link-active' : ''}>Favorites</h2>
				</Link>
			</nav>
		</header>
	 );
}
 
export default Header;