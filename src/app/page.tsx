"use client";
import TxTable from "@/components/TxTable";
import Navbar from "@/components/standalone/Navbar";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Navbar />
			<TxTable />
		</main>
	);
}
