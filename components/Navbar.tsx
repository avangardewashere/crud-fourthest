import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Record It</Link>
      <Link className="" href="/addRecord" >
        New Record
      </Link>
    </nav>
  );
}
