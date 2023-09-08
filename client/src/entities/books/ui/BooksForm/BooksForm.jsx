import Btn from "@/shared/ui/Btn/Btn.jsx";
import ErrorMessage from "@/shared/ui/ErrorMessage/ErrorMessage.jsx";
import TextField from "@/shared/ui/TextField/TextField.jsx";
import get from "lodash.get";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const fields = [
  {
    name: "title",
    title: "Название",
    placeholder: "Книга по разработке",
    validate: { minLength: { value: 2, message: "Минимальная длина 2" } },
  },
  {
    name: "author",
    title: "Автор",
    validate: { minLength: { value: 2, message: "Минимальная длина 2" } },
  },
  {
    name: "publisher",
    title: "Издательство",
    validate: { minLength: { value: 2, message: "Минимальная длина 2" } },
  },
  {
    name: "year",
    title: "Год",
    type: "number",
    validate: {
      valueAsNumber: true,
      min: { value: 1700, message: "Должно быть больше 1700" },
      validate: (value) => Number.isInteger(value) || "Должно быть целым числом",
    },
  },
  {
    name: "rating",
    title: "Оценка",
    type: "number",
    inputMode: "decimal",
    step: "0.01",
    validate: {
      valueAsNumber: true,
      min: { value: 1, message: "Должно быть больше 1" },
      max: { value: 5, message: "Должно быть меньше 5" },
    },
  },
  {
    name: "category.id",
    title: "Id категории",
    type: "number",
    validate: {
      valueAsNumber: true,
      min: {
        value: 0,
        message: "Должно быть больше 0",
      },
      validate: (value) => Number.isInteger(value) || "Должно быть целым числом",
    },
  },
];

const BooksForm = ({ handleSubmit, error, isLoading, defaultValues, btnText }) => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      {fields.map(({ name, validate, ...rest }) => {
        return (
          <div key={name} className="mb-6">
            <TextField
              {...rest}
              {...register(name, {
                required: "Обязательно для заполнения",
                ...validate,
              })}
              errorMessage={get(errors, name)?.message}
            />
          </div>
        );
      })}

      <div className="mt-7">
        <Btn isLoading={isLoading}>{btnText}</Btn>
        {error && <ErrorMessage className="ml-3" error={error} />}
      </div>
    </form>
  );
};

BooksForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  defaultValues: PropTypes.object,
  btnText: PropTypes.string.isRequired,
};

export default BooksForm;
