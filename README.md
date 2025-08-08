## Snip Shots

<img width="1497" height="817" alt="Screenshot 2025-08-08 at 12 31 14" src="https://github.com/user-attachments/assets/90304c96-e316-41b8-bf80-a91f94e426d7" />



## Tools / Libraries Used

- React + Vite — frontend setup
- Bootstrap — basic UI styling
- JavaScript — for pricing logic
- (Optional) Moment.js / dayjs — for time formatting

## Notable Assumptions

- Product data is static and loaded from a local JSON or similar structured source.
- All pricing logic is handled client-side at runtime — no server-side or persistent computation is involved.
- Machine learning behavior is mimicked via heuristic scoring (e.g., base price × category weight + time-of-day + rating adjustments).
- Discounts are only applied when the computed discounted price is strictly **less than** the original price — ensuring price integrity and preventing misleading markdowns.
- Any computed discounted price that ends up **equal to or greater than** the original price is automatically disregarded, and the product is shown at the original price only.
- Off-peak hour discounts (between 12 AM and 6 AM) simulate time-based pricing incentives.
- Certain product categories (e.g., electronics, jewelry) are assumed to carry specific pricing weights based on typical e-commerce strategy.
- High-rated products (rating ≥ 4.5) are treated as premium and priced slightly above baseline, while low-rated items (rating < 2.5) are discounted more aggressively.
- All final prices (original and discounted) are rounded and formatted using **psychological pricing** — ensuring they end in `.99` to simulate retail pricing strategy.

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
