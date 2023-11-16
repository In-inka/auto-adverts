export const splitAddress = address => {
  const addressParts = address.split(',');
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();

  return { city, country };
};
