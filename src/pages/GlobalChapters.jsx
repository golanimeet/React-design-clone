import React from "react";
import MiniNavbar from "../components/MiniNavbar";

const chapters = [
  { name: "UNITED KINGDOM", highlight: true },
  { name: "IRELAND", highlight: false },
  { name: "BRASIL", highlight: false },
  { name: "AUSTRALIA", highlight: false },
];

const GlobalChapters = () => {
  return (
    <>
    <MiniNavbar />
      <div className="bg-black text-white min-h-screen flex md:flex-row flex-col md:justify-evenly items-start">
        <h2 className="text-2xl font-semibold global">Select Global Chapter:</h2>
        <div className="text-[80px] ml-80 flex flex-col justify-start leading-[1.1] font-extrabold space-y-4">
          {chapters.map((chapter, index) => ( 
            <a
              key={index}
              className={
                "hover:text-orange-500 text-white transition-all duration-500 cursor-pointer"
              }
            >
              {chapter.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default GlobalChapters;
