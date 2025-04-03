// pages/flights/[flightId].js
export default function FlightPage({ flightData }) {
  // Display a message if no data is available
  if (!flightData) {
    return <p>No flight data found.</p>;
  }
  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Flight Cancellation Information</h1>
      <p><strong>Flight Number:</strong> {flightData.flightNumber}</p>
      <p><strong>Airport:</strong> {flightData.airportCode}</p>
      
      <h2>Need a Hotel?</h2>
      <p>
        <a href="https://affiliate-hotel-link.com" target="_blank" rel="noreferrer">
          Book a Hotel Now
        </a>
      </p>
      
      <h2>Find Alternate Flights</h2>
      <p>
        <a href="https://affiliate-flights-link.com" target="_blank" rel="noreferrer">
          Search for Alternate Flights
        </a>
      </p>
      
      <h2>Learn About Compensation</h2>
      <p>
        <a href="https://affiliate-compensation-link.com" target="_blank" rel="noreferrer">
          Check Your Flight Compensation Options
        </a>
      </p>
    </div>
  );
}

// Fetch flight cancellation data before rendering the page
export async function getServerSideProps(context) {
  const { flightId } = context.params;
  
  // For now, simulate flight data. In a real scenario, retrieve data from your database.
  const flightData = {
    flightNumber: 'AB123',  // Replace with actual data using flightId if available
    airportCode: 'JFK'      // Replace with actual airport code
  };
  
  return {
    props: {
      flightData
    }
  };
}
