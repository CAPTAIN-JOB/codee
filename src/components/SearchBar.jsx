import React from "react";

const SearchBar = ({ search, setSearch }) => {
	// console.log("search:", search);
	// console.log("setSearch:", setSearch);

	return (
		<div>
			<input
				name="search"
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="outline-orange-500 p-2 border border-gray-300 rounded-lg focus:outline-none"
				placeholder="Search"
			/>
		</div>
	);
};

export default SearchBar;
