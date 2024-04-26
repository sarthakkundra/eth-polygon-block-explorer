"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import useCovalentApi from "../../../hooks/useCovalentApi";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
	const pathName = usePathname();
	const txHash = pathName.split("/")[2];
	const { getPaginatedTxs } = useCovalentApi();

	const { isPending, error, data } = useQuery({
		queryKey: ["txsForAddress"],
		queryFn: () => {
			return getPaginatedTxs();
		},
	});

	useEffect(() => {
		console.log("TX DATA ", data, isPending, error);
	}, [data, isPending, error]);

	return <p>Post: {txHash}</p>;
}
