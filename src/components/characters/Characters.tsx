import { useState, useEffect } from "react"



export function Characters () {
	const URL = `https://rickandmortyapi.com/api/character/?page=${1}`
	const [data, setData] = useState({ results: [] })

	useEffect(() => {
		async function request() {
			const responce = await fetch(URL)
			const data = await responce.json()
			setData(data)
		}
		request()
	}, [])
	console.log(data.results[1].image)
	return (
		<>
			<div className='characters-list'>
				<div className="card">
					<img src={data.results[1]} alt="" className="card__img" />
				</div>
			</div>
			<div className="pagination"></div>
		</>
	)
}