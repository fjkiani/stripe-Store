Whats included:
-frontend React application
-backend Stripe server

Instructions for running application:
-npm install
-npm start 

A paragraph or two about your solution: how does it work? Which Stripe APIs does it use?
-This solution works utilizing the Stripe Checkout API. This was done by creating a new checkout session and a new Stripe API object that makes calls to the Stripe server. We send a request to Stripe and the response is a sessionID object.
 
A paragraph or two about how you approached this problem: which docs did you use to complete the project? What challenges did you encounter?
-To approach this problem, I utilized one of my web appliction that already has the frontend built. The frontend captures the email of a customer and then makes a call to create a checkout session redirects them to the Stripe checkout page. Next, I implemented Stripe for the checkout using the custom built form and this utilized query params to redirect the customer to the success page. One of the challenges I encountered was retrieving the charge ID. I was able to retrieve the customer ID, however. I read that Stripe is intending to deprecate this api sometime in the future in favour to secure payments, so they are encouraging developers to use payment intents and the stripe checkout instead of the charges API. Because of this, I utilized payment intents and captured customer ID using the Stripe checkout API.

Docs utilized:
https://stripe.com/docs/api/checkout/sessions/retrieve 
https://stripe.com/docs/api/expanding_objects
https://stripe.com/docs/api/payment_intents



A paragraph or two about how you might extend this if you were building a more robust instance of the same application.
-To extend this further, I would utilize my own custom checkout since the Stripe custom checkout adds some time in regards to the load time. By utilizing a custom form and authentication, I can also save the credit card payment information in terms of future purchases 
