export function setRequestContext(req, res, next) {
  req.requestContext = {}
  next()
}
