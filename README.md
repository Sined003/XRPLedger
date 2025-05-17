
# XRPLedger

**XRP LEDGER AUTO CONNECT**

---

## Overview

This project provides a simple JavaScript implementation for automatically connecting to the XRP Ledger network. It manages connection lifecycle events and enables easy interaction with the XRP Ledger via WebSocket.

---

## Features

- Auto-connect and reconnect to the XRP Ledger network
- Handles connection, disconnection, and error events
- Simple interface for sending requests to the ledger
- Lightweight and easy to integrate into your projects

---

## Installation

Clone the repository:

```
git clone https://github.com/Sined003/XRPLedger.git
cd XRPLedger
```

Install dependencies (if any):

```
npm install
```

---

## Usage

The main script file is `xrp.js`. You can use it as a starting point to connect to the XRP Ledger and send requests.

Example usage:

```
const { Client } = require('xrpl');

async function main() {
  const client = new Client('wss://s.altnet.rippletest.net:51233'); // Testnet endpoint

  client.on('connected', () => {
    console.log('Connected to XRP Ledger');
  });

  client.on('disconnected', (code) => {
    console.log(`Disconnected from XRP Ledger with code ${code}`);
  });

  client.on('error', (error) => {
    console.error('Connection error:', error);
  });

  await client.connect();

  // Example: get server info
  const response = await client.request({ command: 'server_info' });
  console.log('Server info:', response);

  // Disconnect when done
  await client.disconnect();
}

main().catch(console.error);
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

