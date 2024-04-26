import {
	ETHEREUM_CHAIN_ID,
	SORT_BY_OPTIONS,
} from "./constants";

export const sortTxsByOrder = (
	order: SORT_BY_OPTIONS,
	data: any
) => {
	const dataCopy = [...data];
	if (order === SORT_BY_OPTIONS.TIME) {
		return dataCopy.sort((a: Tx, b: Tx) => {
			const dateA = new Date(a.block_signed_at).getTime();
			const dateB = new Date(b.block_signed_at).getTime();
			return dateB - dateA;
		});
	} else if (order === SORT_BY_OPTIONS.VALUE) {
		return dataCopy.sort((a: Tx, b: Tx) => {
			const valueA = BigInt(a.value);
			const valueB = BigInt(b.value);
			if (valueA < valueB) {
				return -1;
			} else if (valueA > valueB) {
				return 1;
			} else {
				return 0;
			}
		});
	}
};

export const handleBlockExplorerRedirect = (
	chainId: number,
	hash: string
) => {
	const origin =
		chainId === ETHEREUM_CHAIN_ID
			? "https://www.etherscan.io"
			: "https://www.polygonscan.com/";
	window.location.href = `${origin}/tx/${hash}`;
};
