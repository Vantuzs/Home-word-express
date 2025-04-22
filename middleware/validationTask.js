const {CREATE_TASK_VALIDATION_SCHEMA} = require('../utils/validationSchemas');

module.exports.validateTaskCreate = async(req,res,next) =>{
    const {body} = req;
    try {

        req.body = await CREATE_TASK_VALIDATION_SCHEMA.validate(body);

        next()
    } catch (error) {
        next(error)
    }
}