"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Product Services", path: "/productservices" },
];

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="font-lato hidden md:flex space-x-10 text-sm">
      {menus.map((menu, i) => (
        <li key={i}>
          <Link
            href={menu.path}
            className={
              pathname === menu.path
                ? "bg-primary px-4 py-2 rounded-full font-semibold"
                : "hover:text-primary"
            }
          >
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
