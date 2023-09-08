import CategoriesGrid from "../CategoriesGrid/CategoriesGrid.jsx";
import css from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={css.categories}>
      <h2 className={css.categoriesTitle}>Категории книг</h2>
      <CategoriesGrid />
    </div>
  );
};

export default Categories;
