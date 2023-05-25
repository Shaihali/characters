import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import './CharacterDetails.css'


interface CharacterData {
  id: number;
  name: string;
  image: string;
	status: string;
	gender: string;
}

export function CharacterDetails() {
  const [data, setData] = useState<CharacterData | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch character details");
        }
        const responseData: CharacterData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

	console.log(data)
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <a href="/characters">Назад</a>
      <div className="character-details">
        <div className="character-details__img">
          <img src={data.image} alt={data.name} />
        </div>
				<div className="character-details__contant">
						<div className="character-details__item"><span className="subtitle">Имя</span>{data.name}</div>
						<div className="character-details__item"><span className="subtitle">Статус</span>{data.status}</div>
						<div className="character-details__item"><span className="subtitle">Разновидность</span>{data.name}</div>
						<div className="character-details__item"><span className="subtitle">Пол</span>{data.gender}</div>
					</div>
      </div>
    </div>
  );
}
