"use client";

import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { navLinks } from "../utils/arrays";
import { navLinkType } from "../utils/interface";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`bg-sidebarBg text-black lg:sticky w-[15rem] lg:w-full top-0 relative h-screen`}
    >
      <div className="p-6">
        <img
          src={logo}
          width={150}
          height={40}
          alt=""
          className="object-cover"
        />
      </div>

      <div className="links">
        {navLinks.map((item: navLinkType, idx: number) => (
          <Link to={item.url} key={idx}>
            <div className={`link ${pathname === item.url && "active"}`}>
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <div className="">{item.text}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
