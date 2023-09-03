import { validationResult } from "express-validator";
import BadRequest from "../../exceptions/BadRequest.js";

const handleValidationErrors = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequest("Ошибка при валидации данных запроса", errors.array());
  }
};

export default handleValidationErrors;
