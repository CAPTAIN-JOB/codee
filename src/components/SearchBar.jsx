import { useState } from "react";

const SearchBar = ({ search, setSearch }) => {
	console.log();

	return (
		<div>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className=" outline-orange-500  p-2 border border-gray-300 rounded-lg focus:outline-none"
				placeholder=" search"
			/>
		</div>
	);
};

export default SearchBar;
