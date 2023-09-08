import { body } from "express-validator";

const isBodyItemStringWithLength = (name, min, max) =>
  body(name)
    .isString()
    .withMessage("должен быть строкой")
    .isLength({ min, max })
    .withMessage(`длина должна быть в диапазоне ${min}-${max}`);

export default isBodyItemStringWithLength;
