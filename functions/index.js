// Importing necessary modules
const { onRequest } = require("firebase-functions/v2/https"); // Firebase function to handle HTTPS requests
const logger = require("firebase-functions/logger"); // Firebase logger for logging purposes
const express = require("express"); // Express framework to handle HTTP requests and routes
const cors = require("cors"); // CORS middleware to handle cross-origin requests
const dotenv = require("dotenv"); // dotenv to load environment variables from a .env file
dotenv.config(); // Loading environment variables from the .env file

const stripe = require("stripe")(process.env.STRIPE_KEY); // Initialize Stripe with the API key from environment variable

const app = express(); // Creating an instance of Express app
app.use(cors({ origin: true })); // Enabling CORS for all origins to allow cross-origin requests
app.use(express.json()); // Middleware to parse incoming JSON requests

// Defining the route for the root URL ("/")
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success 1", // Sending a success message with HTTP status code 200
  });
});

// Defining the route for POST requests to create a payment
app.post("/payment/create", async (req, res) => {
  const total = req.query.total; // Extracting the 'total' value from query parameters
  if (total > 0) {
    // Check if the total amount is greater than 0
    // Creating a payment intent using the Stripe API with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Total amount for the payment
      currency: "usd", // Currency of the payment (USD)
    });
    // Sending back the client secret for the payment intent
    res.status(201).json({
      clientSecret: paymentIntent.client_secret, // Returning the client secret to the client for the payment process
    });
  } else {
    // If the total is not greater than 0, sending a 403 error response
    res.status(403).json({
      message: "total must be greater than 0", // Error message indicating the issue with the total
    });
  }
});

// Exporting the express app as a Firebase Cloud Function
exports.api = onRequest(app);
