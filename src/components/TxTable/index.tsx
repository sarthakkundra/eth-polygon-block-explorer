import React, { useEffect, useState } from "react";
import TxCard from "../standalone/TxCard";
import { SORT_BY_OPTIONS } from "@/common/constants";

const TxTable = () => {
	const [sortBy, setSortBy] =
		useState<null | SORT_BY_OPTIONS>(null);

	const handleSortBy = (option: SORT_BY_OPTIONS) => {
		if (option === sortBy) {
			setSortBy(null);
			return;
		} else {
			setSortBy(option);
		}
	};

	useEffect(() => {
		/**
		 * maintain 2 states
		 * 1 for data from api, 1 to render data
		 * on change of sort by call util func to change render data accordingly
		 */
	}, [sortBy]);

	return (
		<div className='container w-screen px-4 sm:px-6 lg:px-8 py-4'>
			<div className='flex flex-col'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
							<table className='min-w-full divide-y divide-gray-200'>
								{/* <!-- Header --> */}
								<thead className='bg-gray-50'>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Transactions
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Value
											<input
												type='checkbox'
												checked={
													sortBy === SORT_BY_OPTIONS.VALUE
												}
												onClick={() =>
													handleSortBy(
														SORT_BY_OPTIONS.VALUE
													)
												}
											/>
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
											Time
											<input
												type='checkbox'
												checked={
													sortBy === SORT_BY_OPTIONS.TIME
												}
												onClick={() =>
													handleSortBy(SORT_BY_OPTIONS.TIME)
												}
											/>
										</th>
									</tr>
								</thead>
								{/* <!-- Body --> */}
								<tbody className='bg-white divide-y divide-gray-200'>
									{/* <!-- Repeat this block for each transaction --> */}
									{/* Map through txs to show table */}
									<TxCard />
									{/* <!-- ... other rows ... --> */}
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
