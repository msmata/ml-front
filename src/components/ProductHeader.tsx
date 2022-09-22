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
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{display: "flex", flexDirection: 'row', margin: 16}}>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <ProductImage image={item.picture} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <ProductPrice price={item.price} />
                        <ProductTitle title={item.title} />
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        <div className="location">{item.location}</div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                </div>
            </div>
    );
}