import { Price } from "../types/Price";
import "./ProductPrice.css";

interface ProductPriceProps {
    price: Price;
}

export const ProductPrice = ({price}: ProductPriceProps) => {

    const formatPrice = (price: Price) => {
        const prefix = price.currency === 'ARS' ? '$ ': 'U$S';
        if (price.decimals) {
            return prefix + price.amount + '.' + price.decimals;
        } else {
            return prefix + price.amount;
        }
    }

    return (
        <div className="price">{formatPrice(price)}</div>
    );
}