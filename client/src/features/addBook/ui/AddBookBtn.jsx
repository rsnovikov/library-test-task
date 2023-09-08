import { useModal } from "@/shared/hooks/useModal/useModal.jsx";
import Btn from "@/shared/ui/Btn/Btn.jsx";
import AddBookForm from "./AddBookForm.jsx";

const AddBookBtn = () => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(<AddBookForm />);
  };

  return <Btn onClick={handleClick}>Добавить</Btn>;
};

export default AddBookBtn;
