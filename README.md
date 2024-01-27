# Stripe Payment Processing Application

This application demonstrates a simple server built with Node.js and Express for handling payment-related functionalities using the Stripe API.

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stripe-payment-app.git


2. Navigate to the project directory:
  cd stripe-payment-app

3. Install dependencies:
  npm install

## Configuration

1. Create a .env file
  SECRET_KEY=your_stripe_secret_key
  PORT=3000  # Specify the desired port (optional)
Replace your_stripe_secret_key with your actual Stripe secret key.

## Running the Application

  npm start

## API Endpoints

POST /api/v1/create_intent: Create a new payment intent.
POST /api/v1/capture_intent/:id: Capture a payment intent by ID.
POST /api/v1/create_refund/:id: Create a refund for a charge ID.
GET /api/v1/get_intents: Retrieve the 10 most recent payment intents.

## Logging

Request details are logged to a file named logs.txt in the project directory.

## Postman Link to the API

https://restless-spaceship-201555.postman.co/workspace/New-Team-Workspace~5b65884b-eb21-4a05-8197-06fda158115c/collection/29050300-d355270a-e93d-4785-ae7e-a7219b6c39aa?action=share&creator=29050300




   
