const express = require("express");

const router = express.Router();
const stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/create_intent",async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000,
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
          });

          res.status(200).send({"msg": `Payment intent created`, "Intent Object": paymentIntent});

    } catch (error) {
        res.status(400).send({"msg": "Backend problem."})
    }
})

router.post("/capture_intent/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const capturedIntent = await stripe.paymentIntents.capture(id);

        res.status(200).send({"msg": `Payment intent captured.`, "Captured Object": capturedIntent});
        
    } catch (error) {
        res.status(400).send({"msg": "Backend problem."})
    }
})

router.post("/create_refund/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const refund = await stripe.refunds.create({
            charge: id,
          });

          res.status(200).send({"msg": `Refund intent captured.`, "Refund Object": refund});
        
    } catch (error) {
        res.status(400).send({"msg": "Backend problem."})
    }
})

router.get("/get_intents",async (req, res) => {
    try {
        const paymentIntents = await stripe.paymentIntents.list({
            limit: 10,
          });
          
          res.status(200).send({"10 recent intents": paymentIntents});
    } catch (error) {
        res.status(400).send({"msg": "Backend problem."})
    }
})

module.exports = {router};