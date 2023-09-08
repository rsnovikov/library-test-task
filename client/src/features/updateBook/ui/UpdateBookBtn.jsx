import { useModal } from "@/shared/hooks/useModal/useModal.jsx";
import Btn from "@/shared/ui/Btn/Btn.jsx";
import PropTypes from "prop-types";
import UpdateBookForm from "./UpdateBookForm.jsx";

const UpdateBookBtn = ({ id }) => {
  const { openModal } = useModal();
  if (!id) return <Btn disabled={true}>Обновить выбранную</Btn>;

  const handleClick = () => {
    openModal(<UpdateBookForm bookId={id} />);
  };

  return <Btn onClick={handleClick}>Обновить выбранную</Btn>;
};

UpdateBookBtn.propTypes = {
  id: PropTypes.number,
};

export default UpdateBookBtn;
