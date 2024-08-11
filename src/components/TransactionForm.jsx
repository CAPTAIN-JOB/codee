import React, { useState } from "react";
import url from "./Transaction.jsx";

const TransactionForm = ({ data, setData }) => {
	const [formData, setFormData] = useState({
		id: 0,
		description: "",
		category: "",
		amount: 0,
		date: "",
	});

	const handleChange = (e) => {
		
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((transaction) => setData([...data, transaction]));
		setFormData("");
	};

	return (
		<div className="flex justify-center items-center shadow-2xl rounded-md text-center p-4 m-4">
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className=" flex justify-center " htmlFor="description">
						Description:
						<input
							type="text"
							id="description"
							name="description"
							value={formData.description}
							onChange={handleChange}
							className="p-2 border-2 rounded-lg shadow-sm"
							required
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className=" flex justify-center" htmlFor="category">
						Category:
						<input
							type="text"
							id="category"
							name="category"
							onChange={handleChange}
							className="p-2 border-2 rounded-lg shadow-sm"
							required
						/>
					</label>
				</div>
				<div className="mb-4 ">
					<label className="flex justify-center " htmlFor="amount">
						Amount:
						<input
							type="number"
							id="amount"
							name="amount"
							onChange={handleChange}
							className="p-2 border-2 rounded-lg shadow-sm"
							required
						/>
					</label>
				</div>
				<div className="mb-4">
					<label htmlFor="date">
						Date:
						<input
							type="date"
							id="date"
							name="date"
							onChange={handleChange}
							required
						/>
					</label>
				</div>
				<button
					className="bg-blue-500  hover:bg-slate-400 text-white font-bold px-5 py-2 rounded m-2"
					type="submit"
				>
					Add{" "}
				</button>
			</form>
		</div>
	);
};

export default TransactionForm;
