import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';


interface CharacterData {
  results: Array<{
    id: number;
    name: string;
    image: string;
  }>;
	info: {
		count: number;
		pages: number;
	};
}


export function Characters () {

	const [data, setData] = useState<CharacterData>({ info: { count: 0, pages: 0 }, results: [] })
	const [pageNumber, setPageNumber] = useState(1)
	const [selectedFilterStatus, setSelectedFilterStatus] = useState('');
	const [selectedFilterGender, setSelectedFilterGender] = useState('');
	const URL = getUrl(pageNumber, selectedFilterStatus, selectedFilterGender)

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(URL)
			const responseData = await response.json()
			setData(responseData)
		}
		fetchData()
	}, [data])


	function getUrl (count:number, status:string, gender:string) {
		const URL = `https://rickandmortyapi.com/api/character/?page=${count}&status=${status}&gender=${gender}`
		return URL
	}


  function handleNextClick() {
		if(pageNumber < data.info.pages) {
			setPageNumber(pageNumber + 1);
			getUrl(pageNumber + 1, selectedFilterStatus, selectedFilterGender);
		}
  }
  function handlePrevClick() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      getUrl(pageNumber - 1, selectedFilterStatus, selectedFilterGender);
    }
  }


		function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
			setSelectedFilterStatus(event.target.value)
		}
		function handleGetterChange(event: React.ChangeEvent<HTMLSelectElement>) {
			setSelectedFilterGender(event.target.value)
		}
	

	return (
		<>
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
			</div>
			<div className='characters-list'>
			{data.results.map((item, i) => (
          <div className="card" key={item.id}>
						<Link to={`/characters/${item.id}`}>
							<img
              src={item.image}
              alt={item.name}
              className="card__img"
            	/>
							<div className="card__name">{item.name}</div>
						</Link>
          </div>
        ))}
			</div>
			<div className="pagination">
				<button className="prev button" onClick={handlePrevClick}></button>
				<div className="current-num">{pageNumber}</div>
				<button className="next button" onClick={handleNextClick}></button>
			</div>
		</>
	)
}