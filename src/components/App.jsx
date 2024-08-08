import { useState } from "react";
import NavigationBar from "./NavigationBar";
import Transaction from "./Transaction";

function App() {
	const [search, setSearch] = useState("");
	return (
		<div className="app">
			<NavigationBar search={search} setSearch={setSearch} />

			<Transaction search={search} />
		</div>
	);
}

export default App;
