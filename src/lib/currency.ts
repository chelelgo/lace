// Exchange rate: 1 USD = 130 KES
const KES_TO_USD_RATE = 130;

export function convertToUSD(amount: string | number, currencyCode: string): { amount: number; currency: string } {
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  if (currencyCode === 'KES') {
    return {
      amount: numericAmount / KES_TO_USD_RATE,
      currency: 'USD'
    };
  }
  
  return {
    amount: numericAmount,
    currency: currencyCode
  };
}

export function formatPrice(amount: string | number, currencyCode: string): string {
  const converted = convertToUSD(amount, currencyCode);
  return `${converted.currency} ${converted.amount.toFixed(2)}`;
}
