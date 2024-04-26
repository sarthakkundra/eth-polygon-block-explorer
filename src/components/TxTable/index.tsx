import React, { useEffect, useState } from "react";
import TxCard from "../standalone/TxCard";
import { SORT_BY_OPTIONS } from "@/common/constants";
import { sortTxsByOrder } from "@/common/utils";

interface ITxTableProps {
	data: Array<Tx>;
}
const TxTable: React.FC<ITxTableProps> = ({ data }) => {
	const [sortBy, setSortBy] =
		useState<null | SORT_BY_OPTIONS>(null);
	// possibly getting set to same on rerender?
	// maybe memoize, foce re render or try saving in ref?
	const [renderData, setRenderData] = useState(data);

	const handleSortBy = (option: SORT_BY_OPTIONS) => {
		if (option === sortBy) {
			setSortBy(null);
		} else {
			setSortBy(option);
		}
	};

	useEffect(() => {
		if (sortBy) {
			const sortedData = sortTxsByOrder(sortBy, data);
			setRenderData([...(sortedData as Array<Tx>)]);
		} else {
			setRenderData([...data]);
		}
	}, [sortBy]);

	return (
		<div className='container w-screen px-4 sm:px-6 lg:px-8 py-4'>
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-[#1D1E28] sm:rounded-lg'>
							<table className='min-w-full divide-y divide-[#1D1E28]'>
								<thead className='bg-gray-50'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
											Transactions
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider flex items-center gap-x-1'>
											Value
											<input
												type='checkbox'
												className='cursor-pointer'
												checked={
													sortBy === SORT_BY_OPTIONS.VALUE
												}
												onChange={() =>
													handleSortBy(
														SORT_BY_OPTIONS.VALUE
													)
												}
											/>
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider relative'>
											Time
											<input
												type='checkbox'
												className='ml-2 absolute top-[35%] cursor-pointer'
												checked={
													sortBy === SORT_BY_OPTIONS.TIME
												}
												onChange={() =>
													handleSortBy(SORT_BY_OPTIONS.TIME)
												}
											/>
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-[#1D1E28]'>
									{renderData.map((tx: Tx) => (
										<TxCard
											tx={tx}
											key={tx.tx_hash + sortBy}
										/>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TxTable;
