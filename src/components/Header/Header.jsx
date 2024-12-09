import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Language from "./Language";
import logo from "../../assets/LOGO.png";
import Navlinks from "./Navlinks";
import { IoArrowUpCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown, MdOutlineTheaterComedy } from "react-icons/md";
import { BiMovie } from "react-icons/bi";
import { TbTicket } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import ru from "../../assets/RU.png";
import { languages } from "../../static";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [header, setHeader] = useState(false);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("Ру");
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang.label);
    i18n.changeLanguage(lang.code);
    setIsOpen(false);
  };

  // Modal menyularni yopish
  const handleCloseModals = () => {
    setIsOpen(false);
    setMenu(false);
  };

  // Menyuni ochish va yopish
  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenu(!menu);
  };

  const handleLanguageToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`${
          Mode ? "bg-[#fff]" : "bg-[#000]"
        } duration-300 sticky top-0 z-40 ${
          header
            ? Mode
              ? "shadow-lg shadow-[#0000001a]"
              : "shadow-lg shadow-[#ffffff33]"
            : ""
        }`}
      >
        <div className="container">
          <nav className="flex justify-between items-center h-[90px] relative">
            <div className="flex items-center">
              <NavLink to={"/"}>
                <img src={logo} alt="" className="max-w-[112px]" />
              </NavLink>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Navlinks />
            </div>
            <Language func={setMenu} bool={menu} />
          </nav>
        </div>
      </header>
  
      <div
        onClick={handleCloseModals}
        className={`w-screen h-screen fixed text-center top-[89px] z-[90] ${
          Mode ? "bg-[#2c2c2c6e]" : "bg-[#ffffff33]"
        }  duration-700  border-t border-t-[#00000017]
            ${
              menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
      >
      </div>
  
      {header && (
        <div className="fixed bottom-16 right-[11%] z-[101] duration-300 max-[990px]:right-[5%] max-[990px]:bottom-9 max-[550px]:bottom-6">
          <a href="#">
            <IoArrowUpCircle className="text-[50px] text-red-person" />
          </a>
        </div>
      )}
  
      {Mode && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2 text-center">
          Qorong‘i rejim yoqilgan
        </div>
      )}
    </>
  );
  
};

export default React.memo(Header);
