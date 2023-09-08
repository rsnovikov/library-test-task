import Exception from "./Exception.js";

class BadRequest extends Exception {
  constructor(message, errors) {
    super(400, message, errors);
  }
}

export default BadRequest;
