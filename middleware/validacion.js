/* const authPostValid = (req, res, next) => {
  const { body, method } = req;
  if (method == "POST") {
    const datosBody = Object.keys(body);
    const valid = datosBody.some((value, i) => body[value] === "");
    if (valid)
      return res.status(400).json({
        msg: " No se puede registrar datos vacíos",
      });
    next();
  }
  next();
};
module.exports = { authPostValid };
 */