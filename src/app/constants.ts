/**
 * Solana contract address for TINY D WAR token.
 * Set to a real base58 address when deployed; leave empty for "CA posting soon".
 */
export const CONTRACT_ADDRESS = 'CBRq7ZrmsQ7ioEkdPTESB3tHdeK5ZgKmxHFANkupump';

export function hasContractAddress(): boolean {
  return CONTRACT_ADDRESS.length > 20 && /^[1-9A-HJ-NP-Za-km-z]+$/.test(CONTRACT_ADDRESS);
}
