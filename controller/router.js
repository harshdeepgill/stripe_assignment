// Importing the Express framework and the Stripe library for handling payment-related functionality
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.SECRET_KEY);

// Endpoint to create a new payment intent
router.post("/create_intent", async (req, res) => {
    try {
        // Creating a new payment intent using the Stripe library
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000,  // Amount in cents (e.g., $20.00)
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
        });

        // Sending a successful response with the created payment intent object
        res.status(200).send({"msg": `Payment intent created`, "Intent Object": paymentIntent});
    } catch (error) {
        // Handling errors and sending an error response
        res.status(400).send({"msg": "Backend problem."});
    }
});

// Endpoint to capture a payment intent by ID
router.post("/capture_intent/:id", async (req, res) => {
    const id = req.params.id;

    try {
        // Capturing a payment intent using the Stripe library
        const capturedIntent = await stripe.paymentIntents.capture(id);

        // Sending a successful response with the captured payment intent object
        res.status(200).send({"msg": `Payment intent captured.`, "Captured Object": capturedIntent});
    } catch (error) {
        // Handling errors and sending an error response
        res.status(400).send({"msg": "Backend problem."});
    }
});

// Endpoint to create a refund for a charge ID
router.post("/create_refund/:id", async (req, res) => {
    const id = req.params.id;

    try {
        // Creating a refund using the Stripe library
        const refund = await stripe.refunds.create({
            charge: id,
        });

        // Sending a successful response with the created refund object
        res.status(200).send({"msg": `Refund intent captured.`, "Refund Object": refund});
    } catch (error) {
        // Handling errors and sending an error response
        res.status(400).send({"msg": "Backend problem."});
    }
});

// Endpoint to retrieve the 10 most recent payment intents
router.get("/get_intents", async (req, res) => {
    try {
        // Retrieving a list of payment intents using the Stripe library
        const paymentIntents = await stripe.paymentIntents.list({
            limit: 10,
        });

        // Sending a successful response with the list of payment intents
        res.status(200).send({"10 recent intents": paymentIntents});
    } catch (error) {
        // Handling errors and sending an error response
        res.status(400).send({"msg": "Backend problem."});
    }
});

// Exporting the router for use in the main application
module.exports = {router};
