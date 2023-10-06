import './SearchForm.scss';
import AsyncSelect from 'react-select/async';
import { useGetCategoriesListQuery } from '../../store/api/api';
import { useGetAreasListQuery } from '../../store/api/api';
import MyInput from '../UI/input/MyInput';
import TrashCan from '../../../images/icons/trashcan.svg';
import { useRef } from 'react'

const SearchForm = ({searchValue, setSearchValue, setSelectedCategory, setSelectedArea}) => {
	const categorySelectRef = useRef();
	const areaSelectRef = useRef();
	const categories = useGetCategoriesListQuery();
	const areas = useGetAreasListQuery();
	const loadOptionsCategories = (value, callback) => {
		const filteredOptions = categories.data.meals.filter(category => {
			return category.strCategory.toLowerCase().includes(value.toLowerCase())
		}).map(category => {
			return {value: category.strCategory, label: category.strCategory}
		})
		callback(filteredOptions)
	}
	const loadOptionsAreas = (value, callback) => {
		const filteredOptions = areas.data.meals.filter(area => {
			return area.strArea.toLowerCase().includes(value.toLowerCase())
		}).map(area => {
			return {value: area.strArea, label: area.strArea}
		})
		callback(filteredOptions)
	}
	const changeSelectedCategory = selectedOption => {
		try {
			setSelectedCategory(selectedOption.value)
		} catch {}
	}
	const changeSelectedArea = selectedOption => {
		try {
			setSelectedArea(selectedOption.value)
		} catch {}
	}
	return ( 
		<div className='search-form'>
		<MyInput type='text' placeholder='Search' value={searchValue} setValue={setSearchValue}/>
		<div className="search-filters">
			<div className="select-block">
				<div className="select-container">
					<AsyncSelect ref={categorySelectRef} loadOptions={loadOptionsCategories} classNamePrefix='custom-select' placeholder='Select Category' onChange={changeSelectedCategory} />
				</div>
				<img src={TrashCan} alt="" onClick={() => {
					categorySelectRef.current.clearValue();
					setSelectedCategory(null);
				}} />
			</div>
			<div className="select-block">
				<div className="select-container">
					<AsyncSelect ref={areaSelectRef} loadOptions={loadOptionsAreas} classNamePrefix='custom-select' placeholder='Select Area' onChange={changeSelectedArea}/>
				</div>
				<img src={TrashCan} alt="" onClick={() => {
					areaSelectRef.current.clearValue();
					setSelectedArea(null);
				}}/>
			</div>
		</div>
		</div>
	 );
}
 
export default SearchForm;