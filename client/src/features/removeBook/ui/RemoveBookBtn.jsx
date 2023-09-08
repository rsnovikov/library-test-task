import { booksApi } from "@/entities/books/index.js";
import { useModal } from "@/shared/hooks/useModal/useModal.jsx";
import Btn from "@/shared/ui/Btn/Btn.jsx";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage.jsx";
import PropTypes from "prop-types";

const RemoveBookBtn = ({ id }) => {
  const [removeBook, { isLoading }] = booksApi.useRemoveBookMutation();
  const { openModal } = useModal();
  if (!id) return <Btn disabled={true}>Удалить выбранную</Btn>;

  const handleClick = async () => {
    try {
      await removeBook(id).unwrap();
    } catch (e) {
      openModal(<ErrorMessage error={e} />);
    }
  };

  return (
    <Btn onClick={handleClick} isLoading={isLoading}>
      Удалить выбранную
    </Btn>
  );
};

RemoveBookBtn.propTypes = {
  id: PropTypes.number,
};

export default RemoveBookBtn;
