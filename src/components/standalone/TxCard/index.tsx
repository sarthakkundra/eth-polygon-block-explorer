import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { ethers } from "ethers";
import { Url } from "next/dist/shared/lib/router/router";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

interface ITxCardProps {
	tx: Tx;
}

const TxCard: React.FC<ITxCardProps> = ({ tx }) => {
	const formatTime = (timestamp: string) => {
		// @ts-expect-error
		return `${dayjs(timestamp).fromNow(true)} ago | ${dayjs(
			timestamp
		)}`;
	};

	const formatAmount = (value: string) => {
		return `${ethers.formatEther(value)}`;
	};

	const getTxDetailsPath = (): Url => {
		return `/txDetails/${tx.tx_hash}?from=${tx.from_address}&to=${tx.to_address}&successful=${tx.successful}&gas=${tx.gas_spent}&prettyGas=${tx.pretty_gas_quote}&value=${tx.value}&prettyValue=${tx.pretty_value_quote}`;
	};
	return (
		<>
			<tr
				className='hover:bg-gray-900 bg-black'
				// key={`${tx.tx_hash}-${sortBy}`}
			>
				<td className='px-6 py-4 whitespace-nowrap'>
					<div className='flex items-center'>
						<Link
							href={getTxDetailsPath()}
							className='text-sm font-medium text-primary hover:text-primaryDark max-w-1/4'>
							{tx.tx_hash}
						</Link>
					</div>
				</td>
				<td className='px-6 py-4 whitespace-nowrap'>
					<div className='text-sm text-gray-500'>
						{formatAmount(tx.value)}
					</div>
				</td>
				<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
					{formatTime(tx.block_signed_at)}
				</td>
			</tr>
		</>
	);
};

export default TxCard;
