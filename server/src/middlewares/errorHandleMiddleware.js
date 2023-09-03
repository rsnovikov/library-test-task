import BadRequest from "../exceptions/BadRequest.js";

const errorHandleMiddleware = (err, _req, res, _next) => {
  if (err instanceof BadRequest) {
    const { message, errors } = err;
    return res.status(err.status).json({ message, errors });
  }
  console.error(err);
  return res.status(500).json({ message: "Непредвиденная серверная ошибка" });
};

export default errorHandleMiddleware;
