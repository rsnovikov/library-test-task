import { Sidebar } from "@/widgets/Sidebar";
import { Outlet } from "react-router-dom";
import css from "./BaseLayout.module.css";

const BaseLayout = () => {
  return (
    <div className={css.BaseLayout}>
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default BaseLayout;
