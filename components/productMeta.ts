import { Translation } from '../i18n';

// Each app's costume and description key follow its id: 'penko-db' -> 'db' / 'descPenkoDb'
export const getAppCostume = (productId: string) => productId.replace('penko-', '');
const DESCRIPTION_KEY_OVERRIDES: Record<string, keyof Translation> = {
  'penko-db': 'descPenkoDB',
  'penko-hcm': 'descPenkoHCM',
  'penko-erp': 'descPenkoERP',
};
export const getDescriptionKey = (productId: string) =>
  DESCRIPTION_KEY_OVERRIDES[productId] ??
  (('descPenko' + productId.replace('penko-', '').replace(/^./, c => c.toUpperCase())) as keyof Translation);
