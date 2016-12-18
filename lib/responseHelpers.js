function setStatusRenderError(res, statusCode, message) {
  res.status(statusCode);
  res.render('error', {
    message
  });
}

module.exports = {
  setStatusRenderError
};
