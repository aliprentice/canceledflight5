// pages/api/webhook.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests allowed' });
    return;
  }

  try {
    // Log the incoming flight cancellation data
    console.log('Webhook received:', req.body);
    
    // Extract details from the request body (e.g., flight number, airport code)
    const flightData = req.body;
    
    // OPTIONAL: Here you could save flightData to a cloud database if needed
    
    // Trigger Google Ads campaign (this is a sample function)
    await createGoogleAdsCampaign(flightData);
    
    // Send a successful response back
    res.status(200).json({ message: 'Webhook processed' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ message: 'Error processing webhook' });
  }
}

// This function is a placeholder for your Google Ads integration
async function createGoogleAdsCampaign(flightData) {
  // Here, use flightData.airportCode and other details to interact with Google Ads API
  console.log('Creating Google Ads campaign for airport:', flightData.airportCode);
}
