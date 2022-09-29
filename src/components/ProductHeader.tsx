import { Item } from "../types/Item";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductPrice } from "./ProductPrice";

interface ProductHeaderProps {
    item: Item;
    onSelect: React.MouseEventHandler<HTMLDivElement>;
}

export const ProductHeader = ({item, onSelect}: ProductHeaderProps) => {
    return (
        <div className="productHeaderContainer" onClick={onSelect}>
            <ProductImage image={item.picture} />
            <div className="productInfoContainer">
                <ProductPrice price={item.price} />
                <ProductTitle title={item.title} />
            </div>
            <div className="productLocationSeparator"></div>
            <div className="productLocation">{item.location}</div>
        </div>
    );
}