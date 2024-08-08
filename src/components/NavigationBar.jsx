import React from "react";
import SearchBar from "./SearchBar";

function NavigationBar({ search, setSearch }) {
	return (
		<div>
			<header className=" shadow-md p-6 flex items-center justify-between">
				<h1>Bank of Flatiron</h1>
				<SearchBar search={search} setSearch={setSearch} />
			</header>
		</div>
	);
}

export default NavigationBar;
