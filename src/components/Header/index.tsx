import { useState } from "react";
import { Link, scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu-icon.svg";

const scrollTo = () => {
	scroller.scrollTo("scroll-to-element", {
		duration: 800,
		delay: 0,
		smooth: "easeInOutQuart",
	});
};

const Header = () => {
	const [isActive, setActive] = useState(false);
	const navigate = useNavigate();

	const onNavigete = (path: string) => {
		navigate(path);
	};
	const onClickMenu = () => {
		setActive(!isActive);
	};
	return (
		<div className="flex flex-wrap items-center justify-between w-full py-8">
			<h1 className="font-bold text-2xl">Trypto</h1>
			<div>
				<img
					loading="lazy"
					onClick={() => onClickMenu()}
					className="h-6 w-6 cursor-pointer md:hidden block"
					src={MenuIcon}
				/>
			</div>
			<div
				className={`${
					!isActive ? "hidden" : null
				} w-full md:flex md:items-center md:w-auto`}>
				<ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 pt-5">
					<li className="mr-10 cursor-pointer">
						<Link
							to="home"
							spy={true}
							smooth={true}
							duration={500}
							onClick={() => onNavigete('/')}>
							Home
						</Link>
					</li>
					<li className="mr-10 cursor-pointer">
						<Link
							to="services"
							spy={true}
							smooth={true}
							duration={500}
							onClick={() => onNavigete("/analyse")}>
							Analyse
						</Link>
					</li>
					<li className="mr-10 cursor-pointer">
						<Link
							to="services"
							spy={true}
							smooth={true}
							duration={500}
							onClick={() => scrollTo()}>
							What We Do
						</Link>
					</li>
					<li className="mr-10 cursor-pointer">
						<Link
							to="services"
							spy={true}
							smooth={true}
							duration={500}
							onClick={() => scrollTo()}>
							Tech
						</Link>
					</li>

					<li className="mr-10 cursor-pointer">
						<Link
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							onClick={() => scrollTo()}>
							Blog
						</Link>
					</li>
					<li className="mr-10 cursor-pointer">
						<Link
							to="Dapp"
							spy={true}
							smooth={true}
							duration={500}
							onClick={() => scrollTo()}>
							Dapp
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
