export const getDynamicPrice = (product) => {
  const basePrice = product.price;
  const rating = product.rating?.rate || 3;
  const category = product.category || "";
  const currentHour = new Date().getHours();

  let adjustedPrice = basePrice;

  // Rule 1: Adjust for demand via rating
  if (rating > 4.5) {
    adjustedPrice *= 1.15; // +15% for high demand
  } else if (rating < 2.5) {
    adjustedPrice *= 0.9; // -10% for low rated products
  }

  // Rule 2: Time-based discounts
  if (currentHour >= 0 && currentHour < 6) {
    adjustedPrice *= 0.95; // 5% off for late night shopping
  }

  // Rule 3: Category-based pricing
  if (category === "electronics") {
    adjustedPrice *= 1.1; // Electronics have 10% markup
  } else if (category === "jewelery") {
    adjustedPrice *= 0.97; // 3% discount on jewelery
  }

  return adjustedPrice.toFixed(2);
};
