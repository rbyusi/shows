function validateSchema(ajvValidate) {
    return (req, res, next) => {
        const validSchema = ajvValidate(req.body);
        if (!validSchema) {
            const errors = ajvValidate.errors;
            res.status(400).json(errors);
        }
        next();
    };
}

module.exports = validateSchema;
