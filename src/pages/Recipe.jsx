import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api';

export default function Recipe() {

    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const {goBack} = useNavigate();

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id])

  return (
    <>
        <button className='btn' onClick={goBack}>Go back</button>
        {!recipe.idMeal ? <div>Loading...</div> : (
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h1>{recipe.strMeal}</h1>
                <h6>{recipe.strCategory}</h6>
            </div>
        )}
    </>
  )
}
