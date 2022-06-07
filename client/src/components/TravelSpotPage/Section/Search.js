import React,{useState} from 'react';
import './Search.scss';

const Search = (props) => {
  const [searchTerm,setSearchTerm]= useState('');

        const onChangeSearch = (e) =>{
               e.preventDefault();
               setSearchTerm(e.target.value);
               props.searchFilters(e.target.value)
               console.log('검색확인',searchTerm)
        }
    return ( 
        <div class="container">
       <span className='Search-position'>
          <span  ><input className='search-input' type="text" placeholder='검색..'
          onChange={(e)=>{
            onChangeSearch(e)
            
          }}></input></span>
        </span>
        <div className='search-border'>
           
        </div>
      </div>
    );
};

export default Search;