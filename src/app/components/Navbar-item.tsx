"use client";
import { FC } from "react";
import "./Navbar.scss";

interface NavItem {
  content: React.ReactNode;
}

const NavbarItem: FC<NavItem> = ({ content }) => {
  return (
    <li>
      <a href="">
        {typeof content === "string" ? <span>{content}</span> : content}
      </a>
    </li>
  );
};

export default NavbarItem;
