import './ThemeToggler.scss'
import { useTheme } from '../../hooks/useTheme';
import DayLogo from '../../../images/icons/day.svg';
import NightLogo from '../../../images/icons/night.svg';

const ThemeToggler = () => {
	const {theme, setTheme} = useTheme();
	return ( 
		<div className='theme-toggler' onClick={() => {
			setTheme(theme == 'dark' ? 'light' : 'dark')
		}}>
		{theme == 'dark' ? 
		<img src={DayLogo} alt="" />	: 
		<img src={NightLogo} alt="" />
	}
		</div>
	 );
}
 
export default ThemeToggler;