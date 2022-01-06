import React from "react";
import Link from "next/link";
import { Zar } from "../utils/zar";

export const Cards2 = ({
  path,
  pic,
  title,
  desc,
  date,
  icon,
  author,
  tooltip,
}: {
  path: string;
  pic: string;
  title: string;
  desc: string;
  date: string;
  icon: string;
  author: string;
  tooltip: string;
}) => {
  return (
    <>
      <Link href={path}>
        <div className="overflow-hidden bg-white ">
          <div className="w-full overflow-hidden	">
            <img
              className="hover:scale-110 cursor-pointer	  transition duration-500 ease-in-out"
              src={pic}
            />
          </div>
          <div className="p-5 py-4">
            <div className="font-medium	 text-sm mb-2">{title}</div>
            <div className="flex justify-between 	">
              <p className="text-gray-700 text-sm">{desc}</p>
              <p className="text-gray-700 text-sm	">{date}</p>
            </div>
          </div>
          <div className="border-t border-borGray px-5 py-5 flex justify-between relative text-xs	">
            <div className="flex items-center		">
              <div className="relative">
                <img className="w-7	 h-7 align-middle	rounded-2xl	" src={icon} />
              </div>
              <div className="flex-1 px-2">
                by
                <strong className="pl-1 font-medium	">{author}</strong>{" "}
              </div>
            </div>
            <div className="flex items-center">
              <ul className="flex">
                <li className="mr-1">
                  <span className=" px-1 py-0.5 rounded-lg	tracking-wide font-light bg-blue-300 text-white	">
                    {tooltip}
                  </span>
                </li>
                <li>
                  <span className="px-1 py-0.5 rounded-lg	 tracking-wide	font-light bg-indigo-400 text-white">
                    DEV
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Cards2;

{
  /* <button className="mt-5 bg-transparent text-gray-400	 hover:text-button-hover py-2 px-4 border border-gray hover:border-button-hover rounded-full">
                {item.price}
              </button> */
}
