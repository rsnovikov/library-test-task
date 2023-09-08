import { booksApi } from "@/entities/books/index.js";
import BooksForm from "@/entities/books/ui/BooksForm/BooksForm.jsx";
import { useModal } from "@/shared/hooks/useModal/useModal.jsx";
import PropTypes from "prop-types";

const UpdateBookForm = ({ bookId }) => {
  const [updateBook, { error, isLoading }] = booksApi.useUpdateBookMutation();
  const { data: books } = booksApi.useGetAllBooksQuery();

  const updatingBook = books.find((book) => book.id === bookId);
  const { closeModal } = useModal();

  const handleSubmit = async (data) => {
    await updateBook({ id: bookId, data })
      .unwrap()
      .then(() => closeModal());
  };

  return (
    <BooksForm
      handleSubmit={handleSubmit}
      btnText="Обновить"
      error={error}
      isLoading={isLoading}
      defaultValues={updatingBook}
    />
  );
};

UpdateBookForm.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default UpdateBookForm;
