"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useCovalentApi from "../../../hooks/useCovalentApi";
import { useQuery } from "@tanstack/react-query";
import TxTable from "@/components/TxTable";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import {
	ETHEREUM_CHAIN_ID,
	POLYGON_CHAIN_ID,
} from "@/common/constants";

export default function Page() {
	const pathName = usePathname();
	const account = useAccount();
	const address = pathName.split("/")[2];
	const { getPaginatedTxs, getTokenBalanceForAddress } =
		useCovalentApi(address, account?.chainId as number);
	const [txList, setTxList] = useState<any>(null);

	const { isPending, error, data, refetch } = useQuery({
		queryKey: ["txsForAddress"],
		queryFn: () => {
			return getPaginatedTxs();
		},
		staleTime: 0,
	});

	const {
		data: nativeTokenBalanceData,
		refetch: refetchBalance,
	} = useQuery({
		queryKey: ["nativeTokenBalance"],
		queryFn: () => {
			return getTokenBalanceForAddress();
		},
		staleTime: 0,
	});

	useEffect(() => {
		if (
			data?.data?.address?.toLowerCase() !==
			address.toLowerCase()
		) {
			refetch();
			refetchBalance();
		}
	}, [address]);

	useEffect(() => {
		if (account?.chainId) {
			refetchBalance();
		}
	}, [account?.chainId]);

	useEffect(() => {
		if (
			data?.data?.address?.toLowerCase() ===
				address.toLowerCase() &&
			data?.data?.items
		) {
			setTxList(data.data.items);
		}
	}, [data]);

	return (
		<main className='bg-black min-h-screen min-w-screen flex justify-center'>
			{isPending && (
				<p className='text-secondary text-lg mt-16'>
					Loading......
				</p>
			)}
			{error && (
				<p className='text-secondary text-lg mt-16'>
					Something went wrong!
				</p>
			)}

			{txList && txList.length > 0 && (
				<section className='flex flex-col mt-16'>
					{nativeTokenBalanceData?.items[0]?.balance && (
						<div className='flex flex-col justify-start items-start px-6 md:px-8'>
							<h3 className='text-lg md:text-xl text-white'>
								{ethers.formatEther(
									nativeTokenBalanceData?.items[0]?.balance
								)}{" "}
								{
									nativeTokenBalanceData?.items[0]
										?.contract_ticker_symbol
								}
							</h3>
							<h5 className='text-sm md:text-lg text-white'>
								{
									nativeTokenBalanceData?.items[0]
										?.pretty_quote
								}
							</h5>
						</div>
					)}
					<TxTable data={txList} />
				</section>
			)}
			{txList && !txList.length && (
				<p className='text-secondary text-lg'>
					No Txs found. Are you sure the entered address
					belongs to {account?.chain?.name}?
				</p>
			)}
		</main>
	);
}
