// Currency utilities for locale-based price display

export type SupportedCurrency = 'USD' | 'AUD';

// Approximate exchange rates (USD base)
const EXCHANGE_RATES: Record<SupportedCurrency, number> = {
  USD: 1,
  AUD: 1.55, // 1 USD = ~1.55 AUD
};

export function getUserCurrency(): SupportedCurrency {
  // Check if user is in Australia based on timezone or locale
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const locale = navigator.language || 'en-US';
  
  // Australian timezones
  const australianTimezones = [
    'Australia/Sydney',
    'Australia/Melbourne',
    'Australia/Brisbane',
    'Australia/Perth',
    'Australia/Adelaide',
    'Australia/Hobart',
    'Australia/Darwin',
    'Australia/Canberra',
  ];
  
  if (australianTimezones.includes(timezone) || locale.includes('AU')) {
    return 'AUD';
  }
  
  return 'USD';
}

export function convertPrice(amountUSD: number, targetCurrency: SupportedCurrency): number {
  return amountUSD * EXCHANGE_RATES[targetCurrency];
}

export function formatPrice(amount: string | number, originalCurrency: string, targetCurrency?: SupportedCurrency): string {
  const currency = targetCurrency || getUserCurrency();
  let numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  
  // If original currency is already the target, no conversion needed
  if (originalCurrency === currency) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(numericAmount);
  }
  
  // Convert from USD to target currency
  if (originalCurrency === 'USD' && currency === 'AUD') {
    numericAmount = convertPrice(numericAmount, 'AUD');
  }
  // Convert from AUD to USD
  else if (originalCurrency === 'AUD' && currency === 'USD') {
    numericAmount = numericAmount / EXCHANGE_RATES.AUD;
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(numericAmount);
}
