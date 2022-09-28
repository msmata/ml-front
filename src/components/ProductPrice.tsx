import { Price } from "../types/Price";
import { formatPrice } from "../utils/amountFormatter";
import "./ProductPrice.css";

interface ProductPriceProps {
    price: Price;
}

export const ProductPrice = ({price}: ProductPriceProps) => {

    return (
        <div className="price">{formatPrice(price)}</div>
    );
}