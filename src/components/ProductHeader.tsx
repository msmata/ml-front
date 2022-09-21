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
                <div className="col-sm-12" style={{display: "flex", flexDirection: 'row'}}>
                    <div className="col-sm-2">
                        <ProductImage image={item.picture} />
                    </div>
                    <div className="col-sm-4">
                        <ProductPrice price={item.price} />
                        <ProductTitle title={item.title} />
                    </div>
                </div>
            </div>
    );
}