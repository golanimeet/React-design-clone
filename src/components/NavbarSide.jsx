import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { RiHome9Line } from "react-icons/ri";
import { IoMdInformation } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

const NavbarSide = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = () => {
    toggleMenu();
    window.scroll({ top: 0 });
  };

  return (
    <>
    <div className={`${isOpen? "w-0" : "w-full"} h-screen fixed z-50 top-0 left-0 backdrop-blur-sm bg-white/10`} onClick={toggleMenu}></div>
      <div className="Menu-container text-2xl cursor-pointer">
        <div
          className="flex justify-between border-b-2 items-center p-2 hover:bg-orange-600 transition-all duration-300"
          onClick={toggleMenu}
        >
          <p>Menu</p>
          {isOpen ? (
            <IoIosAdd className="text-3xl" />
          ) : (
            <RxCross1 className="text-2xl" />
          )}
        </div>
        <div
          className={`flex flex-col  ${
            isOpen ? "h-0" : "h-auto"
          } overflow-hidden transition-all delay-200 duration-500`}
        >
          <Link
            to="/"
            className="p-2 hover:underline flex gap-2 items-center"
            onClick={handleClick}
          >
            <RiHome9Line />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="p-2 hover:underline flex gap-2 items-center"
            onClick={handleClick}
          >
            <IoMdInformation />
            <span>About</span>
          </Link>
          <Link
            to="/latest"
            className="p-2 hover:underline flex gap-2 items-center"
            onClick={handleClick}
          >
            <LuNewspaper />
            <span>Latest</span>
          </Link>
          <Link
            to="/contact"
            className="p-2 hover:underline flex gap-2 items-center"
            onClick={handleClick}
          >
            <AiOutlineMail />
            <span>Contact</span>
          </Link>
          <Link
            to="/chapters"
            className="p-2 hover:underline flex gap-2 items-center"
            onClick={handleClick}
          >
            <AiOutlineGlobal />
            <span>Choose Global Chapte</span>
          </Link>
        </div>
        <div className=" border-black flex hover:bg-orange-600 transition-all duration-300">
          <Link to="/" className="p-2 border-t-2 w-full">
            Declare Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarSide;
