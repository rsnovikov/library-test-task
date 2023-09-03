import { body } from "express-validator";
import isBodyItemStringWithLength from "../lib/validation/isBodyItemStringWithLength.js";

const booksValidation = [
  isBodyItemStringWithLength("title", 2, 100),
  isBodyItemStringWithLength("author", 2, 100),
  isBodyItemStringWithLength("publisher", 2, 100),
  body("year")
    .isInt({ min: 1700 })
    .withMessage("должен быть целым числом больше 1700")
    .customSanitizer((value) => Number(value)),
  body("rating")
    .isFloat({ min: 1, max: 5 })
    .withMessage("должен быть числом от 1 до 5")
    .customSanitizer((value) => Number(value)),
  body("categoryId")
    .isInt({ min: 1 })
    .withMessage("Должен быть целым числом больше или равным 1")
    .customSanitizer((value) => Number(value)),
];

export default booksValidation;
