module.exports = jsonErrorHandler = async (err, req, res, next) => {
    res.status(400).send({ error: "Could not decode request: JSON parsing failed" })
}