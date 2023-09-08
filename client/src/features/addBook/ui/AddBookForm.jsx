import { booksApi } from "@/entities/books/index.js";
import BooksForm from "@/entities/books/ui/BooksForm/BooksForm.jsx";
import { useModal } from "@/shared/hooks/useModal/useModal.jsx";

const AddBookForm = () => {
  const [addBook, { error, isLoading }] = booksApi.useAddBookMutation();
  const { closeModal } = useModal();

  const handleSubmit = async (data) => {
    await addBook(data)
      .unwrap()
      .then(() => closeModal());
  };

  return (
    <BooksForm handleSubmit={handleSubmit} btnText="Добавить" error={error} isLoading={isLoading} />
  );
};

export default AddBookForm;
