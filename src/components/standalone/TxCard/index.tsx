import React from "react";

const TxCard = () => {
	return (
		<>
			<tr className='hover:bg-gray-50'>
				<td className='px-6 py-4 whitespace-nowrap'>
					<div className='flex items-center'>
						<div className='text-sm font-medium text-gray-900'>
							0x8a1b3dbe6301650442bf...
						</div>
					</div>
				</td>
				<td className='px-6 py-4 whitespace-nowrap'>
					<div className='text-sm text-gray-900'>
						0.02731812 ETH
					</div>
				</td>
				<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
					3 days ago
				</td>
			</tr>
		</>
	);
};

export default TxCard;
