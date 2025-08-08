## Tools / Libraries Used

- React + Vite — frontend setup
- Bootstrap — basic UI styling
- JavaScript — for pricing logic
- (Optional) Moment.js / dayjs — for time formatting

## Notable Assumptions

- Product data is static and stored in JSON.
- Dynamic pricing is recalculated per page load using client-side logic.
- No real backend or AI model training is used — ML logic is emulated with weighted scoring.
- Off-peak time is defined as 12am–6am.
- Final price always ends in .99 (consumer behavior psychology).

## Bonus (Blockchain Integration – Optional)

This dynamic pricing logic can be extended with blockchain via:

## Bonus: Blockchain Integration (Optional)

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
