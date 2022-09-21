import { Item } from "../types/Item";
import { ProductImage } from "./ProductImage";
import "./ProductHeader.css"
import { ProductTitle } from "./ProductTitle";
import { ProductPrice } from "./ProductPrice";

interface ProductHeaderProps {
    item: Item;
}

export const ProductHeader = ({item}: ProductHeaderProps) => {
    return (
            <div className="row">
                <div className="col-sm-12">
                    <ProductImage image={item.picture} />
                    <ProductTitle title={item.title} />
                    <ProductPrice price={item.price} />
                </div>
            </div>
    );
}