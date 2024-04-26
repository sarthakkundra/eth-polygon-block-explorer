import SearchBar from "@/components/SearchBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Navbar = () => {
	return (
		<nav className='flex justify-center sm:justify-between items-center border-b-2 border-[#1D1E28] w-screen p-4'>
			<h1 className='hidden sm:block'>Tech Assignment</h1>
			<div className='flex flex-col md:flex-row justify-start items-center'>
				<SearchBar />
				<div className='mt-4 ml-0 md:mt-0 md:ml-4'>
					<ConnectButton label='Connect' />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
