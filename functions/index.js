const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Jm0ejIlqKtrHKZc1vCZ2tPvAtlaa5URnggKuVHKA5wuQTlfeK7fSKqaJs3UGMMNE6F1robX1JFLDOuraVUACceR003vatjBWe"
);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

app.use(cors({ origin: false }));

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Wellcome "));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Pago recivido", total);

  const payment = await stripe.paymentsIntents.create({
    ammount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.cliente_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/ecommerce-academlo/us-central1/api
