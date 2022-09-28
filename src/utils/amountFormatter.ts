import { Price } from "../types/Price";

export const formatPrice = (priceToFormat: Price) => {
    const prefix = priceToFormat.currency === 'ARS' ? '$ ': 'U$S';
    if (priceToFormat.decimals) {
        return prefix + priceToFormat.amount.toLocaleString() + ',' + priceToFormat.decimals.toString().padEnd(2, '0');
    } else {
        return prefix + priceToFormat.amount.toLocaleString();
    }
}