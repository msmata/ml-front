import { Price } from "../types/Price";
import "./ProductPrice.css";

interface ProductPriceProps {
    price: Price;
}

export const ProductPrice = ({price}: ProductPriceProps) => {

    const formatPrice = (priceToFormat: Price) => {
        const prefix = priceToFormat.currency === 'ARS' ? '$ ': 'U$S';
        if (priceToFormat.decimals) {
            return prefix + priceToFormat.amount.toLocaleString() + ',' + priceToFormat.decimals.toString().padEnd(2, '0');
        } else {
            return prefix + priceToFormat.amount.toLocaleString();
        }
    }

    return (
        <div className="price">{formatPrice(price)}</div>
    );
}