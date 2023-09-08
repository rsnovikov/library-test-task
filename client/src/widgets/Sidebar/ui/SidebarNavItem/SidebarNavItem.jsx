import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./SidebarNavItem.module.css";

const SidebarNavItem = ({ navItem }) => {
  const { to, title, Icon } = navItem;
  return (
    <li>
      <Link to={to} className={css.sidebarNavItem}>
        {Icon && <Icon className={css.sidebarNavItemIcon} />}
        <span className={css.sidebarNavTitle}>{title}</span>
      </Link>
    </li>
  );
};

SidebarNavItem.propTypes = {
  navItem: PropTypes.object,
};

export default SidebarNavItem;
