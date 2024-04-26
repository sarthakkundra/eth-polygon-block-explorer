import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import {
	ETHEREUM_CHAIN_ID,
	POLYGON_CHAIN_ID,
	randomAddresses,
} from "@/common/constants";

const SearchBar = () => {
	const router = useRouter();
	const account = useAccount();

	const [searchInput, setSearchInput] =
		useState<string>("");

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				let address;
				if (!searchInput) {
					address =
						account?.chainId === ETHEREUM_CHAIN_ID
							? randomAddresses[ETHEREUM_CHAIN_ID]
							: randomAddresses[POLYGON_CHAIN_ID];
				} else {
					address = searchInput;
				}
				router.push(`/address/${address}`);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [searchInput, account?.chainId]);

	return (
		<input
			type='text'
			className='py-1 px-4 rounded-md cursor-pointer text-primary focus:outline-none'
			value={searchInput}
			placeholder='Press enter to search'
			onChange={(e) => setSearchInput(e.target.value)}
		/>
	);
};

export default SearchBar;
