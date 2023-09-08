import isBodyItemStringWithLength from "../lib/validation/isBodyItemStringWithLength.js";

const categoriesValidation = [
  isBodyItemStringWithLength("name", 2, 100),
  isBodyItemStringWithLength("description", 5, 200),
];
export default categoriesValidation;
