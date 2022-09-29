import { Price } from "../types/Price";
import { formatPrice } from "../utils/amountFormatter";

interface ProductPriceProps {
    price: Price;
}

export const ProductPrice = ({price}: ProductPriceProps) => {

    return (
        <div className="productPrice">{formatPrice(price)}</div>
    );
}