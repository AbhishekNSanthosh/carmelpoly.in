import Link from "next/link";
import React from "react";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="bg-primary text-white h-[5vh] px-[5vw] flex items-center justify-between text-sm">
      <div className="flex items-center gap-5">
        <div className="flex flex-row items-center gap-2">
          <MdCall className="text-lg" />
          <Link href="tel:+914772288825" className="hover:underline">
            0477 2288 825
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdEmail className="text-lg" />
          <Link href="mailto:info@carmelpoly.in" className="hover:underline">
            info@carmelpoly.in
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-row items-center gap-2">
          <Link href="/" className="hover:underline">
           STAFF SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}
