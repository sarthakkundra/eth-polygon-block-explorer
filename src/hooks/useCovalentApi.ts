const useCovalentApi = () => {
	const getPaginatedTxs = async () => {
		let headers = new Headers();
		headers.set(
			"Authorization",
			`Bearer ${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
		);

		const data = await fetch(
			"https://api.covalenthq.com/v1/eth-mainnet/address/0x959fe9E2A919A03426010b663C5EB2570d6d07C5/transactions_v3/page/0/?",
			{ method: "GET", headers: headers }
		);

		const jsonData = await data.json();

		return jsonData;
	};
	return {
		getPaginatedTxs,
	};
};

export default useCovalentApi;
