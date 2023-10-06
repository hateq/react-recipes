import cl from './Loader.module.scss';
import LoadingIcon from '../../../../images/icons/loading.svg';

const Loader = () => {
	return ( 
			<div className={cl.loaderContainer}><img className={cl.Loader} src={LoadingIcon} alt="" /></div>
	 );
}
 
export default Loader;