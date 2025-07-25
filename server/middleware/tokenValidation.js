const jwt = require('jsonwebtoken')

module.exports.validateToken = (req, res, next) => {
  let response = {}

  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      throw new Error('Authorization header missing')
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new Error('Authorization header must start with "Bearer "')
    }

    const tokenParts = authHeader.split('Bearer ')
    if (!tokenParts[1]) {
      throw new Error('Token not provided')
    }

    const userToken = tokenParts[1].trim()
    if (!userToken) {
      throw new Error('Token not provided')
    }

    const userToken = req.headers.authorization.split('Bearer')[1].trim()

    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || 'default-secret-key'
    )

    req.user = decodedToken
    return next()
  } catch (error) {
    console.error('Error in tokenValidation.js', error)
    response.status = 401
    response.message = error.message
  }

  return res.status(response.status).send(response)
}
