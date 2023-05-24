import {useState, useEffect} from 'react'
import {getAllCategories} from '../api'
import CategoryList from '../components/CategoryList'

import Seach from '../components/Seach';

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filterCatalog, setFilterCatalog] = useState([])


  const handleSearch = (str) => {
    setFilterCatalog(
      catalog.filter(item => item.strCategory.toLoweCase().includes(str.toLowerCase()))
    )
  }

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories);
      setFilterCatalog(data.categories);
    })
  }, [])

  return (
    <div>
        <>
        <Seach cb={handleSearch}/>
          {!catalog.length ? <div>Page empty</div> : (
            <CategoryList catalog={filterCatalog} />
          )}
        </>
    </div>
  )
}
