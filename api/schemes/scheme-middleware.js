const Schema = require('./scheme-model');
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
async function checkSchemeId (req, res, next) {
  try {
    const schemaId = await Schema.get(req.params.id)
    if (!schemaId) {
        res.status(404).json({ message: 'no such user'})
    } else {
        req.schemaId = schemaId
        res.json(schemaId)
        next()
    }
} catch (error) {
    next()
}
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
