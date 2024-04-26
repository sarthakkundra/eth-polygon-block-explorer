import React, { useState } from "react";

const SearchBar = () => {
	const [searchInput, setSearchInput] =
		useState<string>("");
	return (
		<input
			type='text'
			className='py-1 px-4 rounded-md cursor-pointer'
			value={searchInput}
			placeholder='Press enter to search'
			onChange={(e) => setSearchInput(e.target.value)}
		/>
	);
};

export default SearchBar;
