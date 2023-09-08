import IconBookshelf from "@/shared/ui/icons/IconBookshelf.jsx";
import IconFileDescription from "@/shared/ui/icons/IconFileDescription.jsx";
import clsx from "clsx";
import { useState } from "react";
import SidebarClose from "../SidebarClose/SidebarClose.jsx";
import SidebarLogo from "../SidebarLogo/SidebarLogo.jsx";
import SidebarNav from "../SidebarNav/SidebarNav.jsx";
import SidebarVisibleBtn from "../SidebarVisibleBtn/SidebarVisibleBtn.jsx";
import css from "./Sidebar.module.css";

const navList = [
  { id: 1, to: "/", title: "Категории и книги", Icon: IconBookshelf },
  { id: 2, to: "/about", title: "О реализации тестового", Icon: IconFileDescription },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SidebarVisibleBtn onClick={handleOpen} />

      <aside className={clsx(css.sidebarBody, isOpen && "!translate-x-0")}>
        <div className={css.sidebarContent}>
          <div className={css.sidebarTop}>
            <SidebarLogo />
            <SidebarClose onClick={handleClose} />
          </div>
          <SidebarNav navList={navList} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
