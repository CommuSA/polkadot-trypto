import { useEffect, useState } from "react";
import { animateScroll as scroll, scroller, Link, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import Identicon from "@polkadot/react-identicon";
import { Button, Dropdown, Menu } from "antd";
import Home from "../Home";

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

const logout = () => {};

export const DeMap = ({ users }: DeMapProps) => {
  const [isActive, setActive] = useState(false);
  const onClickMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className="container   overflow-x-hidden px-5 scroll-smooth md:mx-auto">
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
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 pt-5">
            <li className="mr-10 cursor-pointer">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => scrollTo()}
              >
                Home
              </Link>
            </li>
            <li className="mr-10 cursor-pointer">
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => scrollTo()}
              >
                What We Do
              </Link>
            </li>
            <li className="mr-10 cursor-pointer">
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => scrollTo()}
              >
                Tech
              </Link>
            </li>

            <li className="mr-10 cursor-pointer">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => scrollTo()}
              >
                Blog
              </Link>
            </li>
            <li className="mr-10 cursor-pointer">
              <Link
                to="Dapp"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => scrollTo()}
              >
                Dapp
              </Link>
            </li>
            <li className="mr-10 cursor-pointer">
              {/* <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key={"logout"}>
                      <Button onClick={logout} type={"link"}>
                        Logout
                      </Button>
                    </Menu.Item>
                  </Menu>
                }
              > */}
              <Identicon
                value={users[0].address}
                size={32}
                // theme={"substrate"}
              />
              <span>
                {users[0].address.substring(0, 4) +
                  ".." +
                  users[0].address.slice(-4)}
              </span>
              {/* </Dropdown> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white font-averta h-full "> hello</div>
    </div>
  );
};

export default DeMap;
