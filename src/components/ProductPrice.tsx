import { Price } from "../types/Price";
import "./ProductPrice.css";

interface ProductPriceProps {
    price: Price;
}

export const ProductPrice = ({price}: ProductPriceProps) => {

    const formatPrice = (priceToFormat: Price) => {
        const prefix = priceToFormat.currency === 'ARS' ? '$ ': 'U$S';
        if (priceToFormat.decimals) {
            return prefix + priceToFormat.amount + '.' + priceToFormat.decimals;
        } else {
            return prefix + priceToFormat.amount;
        }
    }

    return (
        <div className="price">{formatPrice(price)}</div>
    );
}