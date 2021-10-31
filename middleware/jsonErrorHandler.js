function jsonErrorHandler (err,req,res,next){
    return res.status(400).send({ error: "Could not decode request: JSON parsing failed" })
}

module.exports = jsonErrorHandler;