import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Transaction from "./components/Transaction";

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
