import {useEffect, useState} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { getFilteredCategory } from '../api'

import MealList from '../components/MealList'

export default function Category() {

    const {name} = useParams()
    const [meals, setMeals] = useState([]);
    const {goBack} = useNavigate()

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name])


  return (
    <>
        <button className='btn' onClick={goBack}>Go back</button>
        {!meals.length ? <div>Page empty</div> : <MealList meals={meals}/>}
    </>
  )
}
