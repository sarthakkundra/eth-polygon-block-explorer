"use client";
import { handleBlockExplorerRedirect } from "@/common/utils";
import {
	usePathname,
	useSearchParams,
	permanentRedirect,
} from "next/navigation";
import { useAccount } from "wagmi";
export default function Page() {
	const pathName = usePathname();
	const account = useAccount();
	const searchParams = useSearchParams();

	const transaction = {
		hash: pathName.split("/")[2],
		from: searchParams.get("from"),
		to: searchParams.get("to"),
		gas: searchParams.get("gas"),
		"Gas in USD": searchParams.get("prettyGas"),
		value: searchParams.get("value"),
		"Value in USD": searchParams.get("prettyValue"),
		status: searchParams.get("successful")
			? "Successful"
			: "Failed",
	};

	return (
		<main className='bg-black min-w-screen min-h-screen'>
			<div className='max-w-4xl mx-auto p-6 bg-black shadow-md rounded-md mt-16 overflow-auto'>
				<div className='flex flex-col divide-y divide-[#1D1E28]'>
					{Object.keys(transaction).map((key) => (
						<div
							className={`border-b border-[#1D1E28] py-4 `}
							key={transaction.hash}>
							<span className='text-sm font-semibold text-gray-500'>
								{key}:{" "}
							</span>
							{key === "hash" ? (
								<>
									<p className='cursor-pointer text-primary truncate'>
										{transaction.hash}
									</p>
									<button
										className='rounded-md bg-primary text-white hover:bg-primaryDark py-2 px-4 my-4'
										onClick={() =>
											handleBlockExplorerRedirect(
												account.chainId!,
												transaction.hash
											)
										}>
										View on explorer
									</button>
								</>
							) : (
								<span className='text-md font-medium text-gray-300 break-all'>
									{/* @ts-expect-error */}
									{transaction[key]}
								</span>
							)}
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
