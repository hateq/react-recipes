import Header from '../../header/Header';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return ( 
		<>
		<Header page='error'/>
		<div className="error">
			<h2>This page does not exists</h2>
			<button><Link to='/'>To main page</Link></button>
		</div>
		</>
	 );
}
 
export default ErrorPage;