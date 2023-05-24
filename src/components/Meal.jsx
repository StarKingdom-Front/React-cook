import React from 'react'
import { Link } from 'react-router-dom';

export default function Meal(props) {

    const {strMeal, idMeal, strMealThumb} = props;

  return (
    <div classNameName='card'>
        <div className="card">
        <div className="card-image">
        <img src={strMealThumb} alt={strMeal}></img>
        </div>
        <div className="card-content">
        <span className="card-title">{strMeal}</span>
        </div>
    </div>
    <div className="card-action">
        <Link to={`/meal/${idMeal}`} classNameName='btn'>Watch recipe</Link>
    </div>
    </div>
  )
}
