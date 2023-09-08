import IconBxsBookHeart from "@/shared/ui/icons/IconBxsBookHeart.jsx";
import { Link } from "react-router-dom";
import css from "./SidebarLogo.module.css";

const SidebarLogo = () => {
  return (
    <Link to="/" className={css.sidebarLogo}>
      <IconBxsBookHeart className={css.sidebarLogoIcon} />
      <span className={css.sidebarLogoText}>Library</span>
    </Link>
  );
};

export default SidebarLogo;
