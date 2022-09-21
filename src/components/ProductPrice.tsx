import { Price } from "../types/Price";

interface ProductPriceProps {
    price: Price;
}

export const ProductPrice = ({price}: ProductPriceProps) => {
    return (
        <span> $ {price.amount}</span>
    );
}