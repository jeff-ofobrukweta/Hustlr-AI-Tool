// src/utils/pricing.js

const categoryWeights = {
  electronics: 1.15, // higher margin
  jewelery: 0.9, // more discounts
  "men's clothing": 1.0,
  "women's clothing": 1.0,
};

const getPsychologicalPrice = (price) => {
  return (Math.floor(price) + 0.99).toFixed(2); // E.g., 39.99
};

export const getDynamicPrice = (product) => {
  const basePrice = product.price ?? 0;
  const rating = product.rating?.rate ?? 3; // 1–5
  const category = product.category ?? "other";
  const hour = new Date().getHours(); // 0–23
  const categoryWeight = categoryWeights[category] ?? 1.0;

  //Base demand-based multiplier
  let demandMultiplier = 1;
  if (rating >= 4.5) demandMultiplier = 1.1; // high demand
  else if (rating < 2.5) demandMultiplier = 0.9; // low demand

  // Time-of-day discounts (e.g., flash deals at night)
  let timeDiscount = 1;
  if (hour >= 0 && hour < 6) timeDiscount = 0.95; // off-peak shopping time

  // ML-inspired weighted score
  const w1 = 0.7; // base price
  const w2 = 2.3; // rating
  const w3 = 0.05; // hour
  const w4 = 4.2; // category weight
  const bias = 3.5;

  let predictedPrice =
    w1 * basePrice + w2 * rating + w3 * hour + w4 * categoryWeight + bias;

  // Apply demand + time discounts
  predictedPrice = predictedPrice * demandMultiplier * timeDiscount;

  // Convert to price ending in .99 (psychological pricing)
  const finalPrice = getPsychologicalPrice(predictedPrice);

  return finalPrice;
};
