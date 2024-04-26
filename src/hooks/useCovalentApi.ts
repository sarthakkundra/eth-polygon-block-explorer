import { ETHEREUM_CHAIN_ID } from "@/common/constants";
import { CovalentClient } from "@covalenthq/client-sdk";

const useCovalentApi = (
	address: string,
	chainId: number
) => {
	const getPaginatedTxs = async () => {
		console.log({ chainId });
		let headers = new Headers();
		headers.set(
			"Authorization",
			`Bearer ${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
		);

		const data = await fetch(
			`https://api.covalenthq.com/v1/${
				chainId === ETHEREUM_CHAIN_ID
					? "eth-mainnet"
					: "matic-mainnet"
			}/address/${address}/transactions_v3/page/0/?`,
			{ method: "GET", headers: headers }
		);

		const jsonData = await data.json();

		return jsonData;
	};

	const getTokenBalanceForAddress = async () => {
		if (!chainId) return null;
		const covalentClient = new CovalentClient(
			process.env.NEXT_PUBLIC_COVALENT_API_KEY!
		);
		const data =
			await covalentClient.BalanceService.getNativeTokenBalance(
				chainId === ETHEREUM_CHAIN_ID
					? "eth-mainnet"
					: "matic-mainnet",
				address
			);

		return data.data;
	};
	return {
		getPaginatedTxs,
		getTokenBalanceForAddress,
	};
};

export default useCovalentApi;
