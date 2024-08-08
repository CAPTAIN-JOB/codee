import React from "react";

const SearchBar = ({ search, setSearch }) => {
	const handleInputChange = (e) => {
		const newSearchText = e.target.value;
		setSearchText(newSearchText);
		onSearch(newSearchText);
	};
	console.log();

	return (
		<div>
			<input
				type="text"
				value={search}
				onChange={handleInputChange}
				className=" outline-orange-500  p-2 border border-gray-300 rounded-lg focus:outline-none"
				placeholder=" search"
			/>
		</div>
	);
};

export default SearchBar;
