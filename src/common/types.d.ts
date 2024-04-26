type Tx = {
	successful: boolean;
	from_address: string;
	to_address: string;
	fees_paid: string;
	gas_spent: bigint;
	block_signed_at: string;
	pretty_gas_quote: string;
	pretty_value_quote: string;
	value: string;
	tx_hash: string;
};
