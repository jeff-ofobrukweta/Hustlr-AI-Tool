const categoryWeights = {
  electronics: 1.15, // higher margin
  jewelery: 0.9,     // more discounts
  "men's clothing": 1.0,
  "women's clothing": 1.0,
};

const getPsychologicalPrice = (price) => {
  const floored = Math.floor(price) + 0.99;
  return floored < price ? price.toFixed(2) : floored.toFixed(2);
};

export const getDynamicPrice = (product) => {
  const basePrice = product.price ?? 0;
  const rating = product.rating?.rate ?? 3;
  const category = product.category ?? "other";
  const hour = new Date().getHours();

  const categoryWeight = categoryWeights[category] ?? 1.0;

  // Demand-based multiplier
  let demandMultiplier = 1;
  if (rating >= 4.5) demandMultiplier = 1.1;
  else if (rating < 2.5) demandMultiplier = 0.9;

  // Time-based adjustment
  let timeDiscount = 1;
  if (hour >= 0 && hour < 6) timeDiscount = 0.95;

  // ML-inspired price prediction
  const w1 = 0.7; // base price
  const w2 = 2.3; // rating
  const w3 = 0.05; // hour
  const w4 = 4.2; // category
  const bias = 3.5;

  let predictedPrice =
    w1 * basePrice + w2 * rating + w3 * hour + w4 * categoryWeight + bias;

  // Apply multipliers
  predictedPrice *= demandMultiplier * timeDiscount;

  // Apply psychological pricing
  let finalPrice = parseFloat(getPsychologicalPrice(predictedPrice));

  // Enforce that final price is lower than original
  if (finalPrice >= basePrice) {
    finalPrice = parseFloat((basePrice * 0.97).toFixed(2)); // apply 3% discount
  }

  return finalPrice.toFixed(2);
};
