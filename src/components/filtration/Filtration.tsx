import { useState } from "react"
import { Link } from 'react-router-dom';
import './Filtration.css'



export function Filtration () {
	const [selectedFilterStatus, setSelectedFilterStatus] = useState('');
	const [selectedFilterGender, setSelectedFilterGender] = useState('');
	

	function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedFilterStatus(event.target.value)
  }
	function handleGetterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedFilterGender(event.target.value)
  }

	function handleButtonClick() {
		console.log(selectedFilterStatus, selectedFilterGender )
	}

	
	return (
		<div className="filtration">
			<select name="status" value={selectedFilterStatus} onChange={handleStatusChange}>
				<option value=""></option>
				<option value="Alive">Alive</option>
				<option value="unknown">unknown</option>
				<option value="Dead">Dead</option>
			</select>
			<select name="gender" value={selectedFilterGender} onChange={handleGetterChange}>
				<option value=""></option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>
			<Link to={`/characters/?status=${selectedFilterStatus}&gender=${selectedFilterGender}`}>
				<button onClick={handleButtonClick}>Применить</button>
			</Link>
		</div>
	)
}