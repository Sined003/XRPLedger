import { Client } from 'xrpl';

// Define the WebSocket endpoint (Testnet or Mainnet)
const XRPL_SERVER = 'wss://s.altnet.rippletest.net:51233'; // Testnet endpoint
// const XRPL_SERVER = 'wss://xrplcluster.com/'; // Mainnet public endpoint

async function main() {
  // Create a new client instance
  const client = new Client(XRPL_SERVER);

  // Attach event handlers for connection lifecycle
  client.on('connected', () => {
    console.log('Connected to XRPL server');
  });

  client.on('disconnected', (code: number) => {
    console.log(`Disconnected from XRPL server with code ${code}`);
  });

  client.on('error', (error: Error) => {
    console.error('Connection error:', error);
  });

  // Connect to the XRP Ledger
  await client.connect();

  // Example: request server info
  const serverInfo = await client.request({ command: 'server_info' });
  console.log('Server info:', serverInfo);

  // The client will automatically try to reconnect if disconnected
  // Your app logic here...

  // To disconnect manually when done:
  // await client.disconnect();
}

main().catch(console.error);
