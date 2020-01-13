import React from 'react';
const SearchBox=({searchChange}) =>{
	return(
		<div className='pa-2'>
		<input className='pa3 b--green bg-lightest-blue'type='Search'placeholder='search robots 'onChange={searchChange}/>
		</div>

	);
}

export default SearchBox;
	
