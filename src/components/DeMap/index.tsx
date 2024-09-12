import { useEffect, useState } from "react";
import { animateScroll as scroll, scroller, Link, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import Identicon from "@polkadot/react-identicon";
import { Button, Dropdown, Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import Home from "../Home";
import Platform from "./Platform";
import Header from "@/components/Header";

interface DeMapProps {
	users: InjectedAccountWithMeta[];
	//   param: {
	//     name: string;
	//     personId: string;
	//   };
}

AOS.init({
	once: false,
	mirror: true,
	offset: 120,
	easing: "ease",
});

const scrollTo = () => {
	scroller.scrollTo("scroll-to-element", {
		duration: 800,
		delay: 0,
		smooth: "easeInOutQuart",
	});
};

export const DeMap = ({ users }: DeMapProps) => {
	const [isActive, setActive] = useState(false);
	const navigate = useNavigate();

	const logout = () => {
		try {
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const onClickMenu = () => {
		setActive(!isActive);
	};

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: "Logout",
			onClick: logout,
		},
	];

	return (
		<div className="container   overflow-x-hidden px-5 scroll-smooth md:mx-auto">
			<Header />
			<div className="bg-white font-averta h-full ">
				<Platform />
			</div>
		</div>
	);
};

export default DeMap;
