import React ,{ useLayoutEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { changeSearchTerm } from '../../../../Features/searchTermSlice'

function SearchBar() {

  const [searchTerm, setSeacrhTerm] = useState<string>("")

  
   const dispatch = useDispatch();
  
   useLayoutEffect(() => {
    dispatch(changeSearchTerm(searchTerm))
   }, [searchTerm])

  
  return (
    <>
    <input
     type="text" 
     placeholder="search..."
     value={searchTerm}
     onChange={e => setSeacrhTerm(e.target.value)} />
    </>
  )
}

export default SearchBar