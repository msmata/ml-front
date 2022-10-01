import { CategoryWrapper } from "../components/CategoryWrapper";
import { SearchBox } from "../components/SearchBox";
import { SingleItem } from "../types/SingleItem";
import { formatPrice } from "../utils/amountFormatter";

interface ItemDetailViewProps {
    item: SingleItem;
    breadcrumb: string;
    searchProduct: string;
    onSearchClick: () => void;
    onSearchProductChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ItemDetailView = ({item, breadcrumb, searchProduct, onSearchClick, onSearchProductChange}: ItemDetailViewProps) => {
    return (
        <>
            <SearchBox onClickSearch={onSearchClick} onSearchProductChange={onSearchProductChange} searchProduct={searchProduct} />
            <CategoryWrapper breadcrumb={breadcrumb}>
                <div className="productDetailContainer">
                    <img src={item.picture} className="imageProductDetail" alt="imagen del producto" />
                    <div className="productInfoContainer">
                        <div className="condition">{item.condition} - {item.sold_quantity} vendidos</div>
                        <div className="title">{item.title}</div>
                        <div className="amount">{formatPrice(item.price)}</div>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <div className="descriptionLabel">Descripcion del producto</div>
                    <div className="descriptionText">{item.description}</div>
                </div>
            </CategoryWrapper>
        </>
    );
}