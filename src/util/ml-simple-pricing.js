const categoryWeights = {
  electronics: 1.15,
  jewelery: 0.9,
  "men's clothing": 1.0,
  "women's clothing": 1.0,
};

const getPsychologicalPrice = (price) => {
  return (Math.floor(price) + 0.99);
};

export const getDynamicPrice = (product) => {
  const basePrice = product.price ?? 0;
  const rating = product.rating?.rate ?? 3;
  const category = product.category ?? "other";
  const hour = new Date().getHours();
  const categoryWeight = categoryWeights[category] ?? 1.0;

  let demandMultiplier = 1;
  if (rating >= 4.5) demandMultiplier = 1.1;
  else if (rating < 2.5) demandMultiplier = 0.9;

  let timeDiscount = 1;
  if (hour >= 0 && hour < 6) timeDiscount = 0.95;

  const w1 = 0.7;
  const w2 = 2.3;
  const w3 = 0.05;
  const w4 = 4.2;
  const bias = 3.5;

  let predictedPrice =
    w1 * basePrice + w2 * rating + w3 * hour + w4 * categoryWeight + bias;

  predictedPrice = predictedPrice * demandMultiplier * timeDiscount;

  // Apply psychological pricing
  let finalPrice = getPsychologicalPrice(predictedPrice);

  // Cap it at the original price if it's higher
  if (finalPrice > basePrice) {
    finalPrice = basePrice;
  }

  return finalPrice.toFixed(2);
};
