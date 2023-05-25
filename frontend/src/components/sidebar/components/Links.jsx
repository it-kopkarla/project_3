import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMan, IoIosHome, IoLogoBuffer } from "react-icons/io";

export function SidebarLinks(props) {
  const {name, link, icon} = props;

  return (
    <div className="relative mb-6 flex hover:cursor-pointer hover:bg-gray-200 hover:rounded-md py-2 mx-4">
      <Link to={link} >
        <li className="my-[3px] flex cursor-pointer items-center px-8 ">
            <span className={"font-bold text-brand-500 dark:text-white"}>
            {icon === 'IoIosMan' ? <IoIosMan /> : icon === 'IoIosHome' ? <IoIosHome /> :  <IoLogoBuffer/>}
            </span>
            <p className={`leading-1 ml-4 flex font-bold text-navy-700 dark:text-white`}>
            {name}
            </p>
          </li>
      </Link>
    </div>
  );
}

export default SidebarLinks;
