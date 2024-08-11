import React, { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
export const url = "http://localhost:3000/transactions";
const Transaction = ({ search }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div>
			<TransactionForm data={data} setData={setData} />
			<table className="shadow-2xl rounded-lg p-8 m-4 w-full border-collapse">
				<thead className="bg-gray-200">
					<tr className="text-left border-b-2 border-gray-300">
						<th className="p-4">Description</th>
						<th className="p-4">Category</th>
						<th className="p-4">Amount</th>
						<th className="p-4">Date</th>
					</tr>
				</thead>
				<tbody>
					{data
						.filter(
							(data) =>
								search === "" ||
								data.category.toLowerCase().includes(search.toLowerCase())
						)
						.map((item) => (
							<tr key={item.id} className="hover:bg-gray-100">
								<td className="px-4 py-2 border-b border-gray-200">
									{item.description}
								</td>
								<td className="px-4 py-2 border-b border-gray-200">
									{item.category}
								</td>
								<td className="px-4 py-2 border-b border-gray-200">
									{item.amount}
								</td>
								<td className="px-4 py-2 border-b border-gray-200">
									{item.date}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Transaction;
