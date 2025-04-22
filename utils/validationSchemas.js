const yup = require('yup');

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
    text: yup.string().required().min(5),
    isResolve: yup.boolean().required()
})