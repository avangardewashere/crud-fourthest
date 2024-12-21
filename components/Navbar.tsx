import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 bg-gradient-to-r to-sky-300 from-cyan-200 shadow-md rounded-md ">
      <Link className=" text-sky-600 font-bold p-2 rounded-lg"  href="/">Record It</Link>
      <Link className="bg-white text-sky-600 p-2 rounded-lg" href="/addRecord">
        New Record
      </Link>
    </nav>
  );
}
