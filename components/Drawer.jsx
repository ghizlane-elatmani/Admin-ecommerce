"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import {
  FaHouse,
  FaBox,
  FaBoxesStacked,
  FaBoxesPacking,
} from "react-icons/fa6";
import { FaCog } from "react-icons/fa";

const Drawer = () => {
  const pathname = usePathname();

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-base gap-1">
        <div className="text-primary font-bold text-center mb-5 text-xl">
          ShopNow
        </div>

        <li>
          <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>
            <FaHouse /> Home
          </Link>
        </li>

        <li>
          <Link
            href={"/products"}
            className={`${pathname.includes("/products") ? "active" : ""}`}
          >
            <FaBox /> Products
          </Link>
        </li>

        <li>
          <Link
            href={"/categories"}
            className={`${pathname.includes("/categories") ? "active" : ""}`}
          >
            <FaBoxesStacked /> Categories
          </Link>
        </li>

        <li>
          <Link
            href={"/orders"}
            className={`${pathname.includes("/orders") ? "active" : ""}`}
          >
            <FaBoxesPacking /> Orders
          </Link>
        </li>

        <li>
          <Link
            href={"/settings"}
            className={`${pathname.includes("/settings") ? "active" : ""}`}
          >
            <FaCog />
            Setting
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
