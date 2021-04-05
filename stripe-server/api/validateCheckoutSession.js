const stripeAPI = require('../stripe');

async function validateCheckoutSession (req, res) {
  try {
    const sessionId = req.query.sessionId
    if (!sessionId) throw new Error('Session Id is Required')
    const session = await stripeAPI.checkout.sessions.retrieve(sessionId, { expand: ['payment_intent' ]})
    console.log({ session })
    res.status(200).json({ session })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message })
  }
}

module.exports = validateCheckoutSession