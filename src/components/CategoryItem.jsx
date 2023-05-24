import React from 'react'

import {Link} from 'react-router-dom'

export default function CategoryItem(props) {

    const {
        // idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = props;



  return (
    <div classNameName='card'>
        <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory}></img>
        </div>
        <div className="card-content">
          <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} classNameName='btn'>Watch category</Link>
      </div>
    </div>
  )
}
