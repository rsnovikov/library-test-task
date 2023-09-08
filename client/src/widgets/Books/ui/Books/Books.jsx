import BooksGrid from "../BooksGrid/BooksGrid.jsx";
import css from "./Books.module.css";

const Books = () => {
  return (
    <div className={css.books}>
      <h2 className={css.booksTitle}>Книги</h2>
      <BooksGrid />
    </div>
  );
};

export default Books;
