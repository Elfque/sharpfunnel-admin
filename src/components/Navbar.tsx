"use client";

import { useState } from "react";
import { IoPerson } from "react-icons/io5";

import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";
// import { useStore } from "zustand";
// import store from "../store/state";

const Navbar = () => {
  // const { user } = useStore(store);

  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex justify-end items-center pl-4 lg:pl-6 lg:px-6 py-3 bg-navbarBg sticky top-0 z-20 lg:z-0">
      <div className="flex justify-end items-center gap-4">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-10 h-10 bg-inputBorder rounded-full">
            <Link to={"/profile"}>
              <IoPerson className="text-emailTextColor text-xl" />
            </Link>
          </div>
          <div className="text-sm text-emailTextColor hidden md:inline">
            exampleuser@user.com
          </div>
        </div>

        <div
          className={`menu w-fit border rounded-lg border-gray-600 text-black text-3xl p-1 block lg:hidden relative z-30 bg-gray-100`}
          onClick={() => setShowNav(!showNav)}
        >
          {!showNav ? <BiMenuAltRight /> : <BiMenuAltLeft />}
        </div>

        {/* MOBILE NAV */}
        <div
          className={`mobile-nav z-50 fixed h-screen w-68 hider top-0 flex justify-center bg-bgWhite overflow-auto duration-300 ${
            showNav ? "left-0" : "-left-60"
          }`}
        >
          <div className="pb-6 lg:hidden">
            <Sidebar />
          </div>
        </div>

        <div className="lg:hidden">{showNav && <Overlay />}</div>
      </div>
    </div>
  );
};

export default Navbar;
