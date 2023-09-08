import PropTypes from "prop-types";
import SidebarNavItem from "../SidebarNavItem/SidebarNavItem.jsx";
import css from "./SidebarNav.module.css";

const SidebarNav = ({ navList }) => {
  return (
    <ul className={css.sidebarNav}>
      {navList.map((navItem) => (
        <SidebarNavItem key={navItem.id} navItem={navItem} />
      ))}
    </ul>
  );
};

SidebarNav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.object),
};

export default SidebarNav;
