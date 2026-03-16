/**
 * Solana contract address for TINY D WAR token.
 * Set to a real base58 address when deployed; leave empty for "CA posting soon".
 */
export const CONTRACT_ADDRESS = 'PWPfUdU5qGCsyu4C1PRfT4UUEeNc3VEu4BqJgcNpump';

export function hasContractAddress(): boolean {
  return CONTRACT_ADDRESS.length > 20 && /^[1-9A-HJ-NP-Za-km-z]+$/.test(CONTRACT_ADDRESS);
}
