import React, { useContext } from 'react';
import { context } from '../App';


function Search() {
    const { searchData } = useContext(context)
    return (
        <div className="container mb-4 ">
            <form className='d-flex justify-content-around align-items-center'>
                <input type="search" name="search" className="form-control w-75 mb-2" onChange={(e) => searchData(e.target.value)} />
            </form>
        </div>
    )
}

export default Search
