import SearchBar from "@/components/SearchBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center bg-red-400 w-screen p-4'>
			<h1>Tech Assignment</h1>
			<div className='flex justify-start items-center'>
				<SearchBar />
				<ConnectButton label='Connect' />
			</div>
		</nav>
	);
};

export default Navbar;
