"use client";
import { useAccount } from "wagmi";
import {
	ETHEREUM_CHAIN_ID,
	POLYGON_CHAIN_ID,
} from "@/common/constants";

export default function Home() {
	const account = useAccount();
	if (
		!account.address ||
		(account?.chainId !== ETHEREUM_CHAIN_ID &&
			account?.chainId !== POLYGON_CHAIN_ID)
	) {
		return (
			<p className='text-white text-lg mt-16'>
				Please connect wallet to Ethereum / Polygon to
				continue.
			</p>
		);
	}

	if (account.address && !account?.chainId) {
		return (
			<p className='text-white text-lg mt-16'>
				Configuring Chain.....
			</p>
		);
	}
	return (
		<main className='flex min-h-screen flex-col items-center justify-start mt-16'>
			<p className='text-white text-lg'>
				Enter an address or press enter in search bar for a
				random address :)
			</p>
		</main>
	);
}
