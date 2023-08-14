import React from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

const NavbarHome = () => {
  return (
    <div className="mb-6 border-b border-slate-200 pb-2 text-base font-semibold">
      <div className="flex justify-between">
        <p className="text-xl mb-2">도움이 필요해요</p>
        <Link to="/donor/mypage">
          <div className="">
            <FaRegCircleUser size="25" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarHome;
