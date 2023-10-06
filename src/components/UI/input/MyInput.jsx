import cl from './MyInput.module.scss';

const MyInput = ({placeholder, type, value, setValue}) => {
	return ( 
		<input className={cl.MyInput} type={type} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
	 );
}
 
export default MyInput;