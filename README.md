## Snip Shots
![Uploading Screenshot 2025-08-08 at 11.41.12.png…]()

## Tools / Libraries Used

- React + Vite — frontend setup
- Bootstrap — basic UI styling
- JavaScript — for pricing logic
- (Optional) Moment.js / dayjs — for time formatting

## Notable Assumptions

- Product data is static and accessed from local JSON or similar source.
- Dynamic pricing is calculated entirely on the client side, during each page load.
- No real machine learning training is performed — ML-like behavior is simulated using weighted scoring of base price, rating, time, and category weight.
- Time-of-day discount is applied between 12 AM and 6 AM to simulate off-peak shopping incentives.
- Category-specific weights assume certain product types (like electronics or jewelry) naturally have different pricing strategies.
- High-rated products (rating ≥ 4.5) are assumed to be in high demand and priced slightly higher; low-rated ones (rating < 2.5) receive discounts.
- All final prices are formatted using psychological pricing (rounded and ending in `.99`) to simulate common e-commerce pricing strategy.

## Bonus: Blockchain Integration (Optional)
This dynamic pricing logic can be extended with blockchain via:

- The dynamic pricing engine can be enhanced using blockchain technology by enabling token-gated pricing, where users holding specific NFTs or tokens receive exclusive discounts. Additionally, pricing could be personalized through on-chain user preferences, tailoring offers based on wallet activity. Loyalty can be incentivized using smart contracts that automatically reward frequent buyers with special pricing tiers or cashback tokens.
- Token-gated pricing: Users holding NFTs or loyalty tokens unlock better prices.
- On-chain user preferences: Pricing tailored to wallet activity or preferences stored on-chain.
- Loyalty Smart Contracts: Users who frequently purchase could auto-receive discounts.



## Run Locally

Clone the project

```bash
  git clone https://dredsoft-labs-admin@bitbucket.org/dredsoft-labs/ecommerce.git
```

Go to the project directory

```bash
  cd ecommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```
