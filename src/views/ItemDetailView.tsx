import { CategoryWrapper } from "../components/CategoryWrapper";
import { SearchBox } from "../components/SearchBox";
import { SingleItem } from "../types/SingleItem";
import { formatPrice } from "../utils/amountFormatter";
import './ItemDetailView.css';

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{display: "flex", flexDirection: 'row', margin: 16}}>
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <img src={item.picture} className="imageDetail" alt="imagen del producto" />
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                <div className="condition">{item.condition} - {item.sold_quantity} vendidos</div>
                                <div className="title">{item.title}</div>
                                <div className="amount">{formatPrice(item.price)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{display: "flex", flexDirection: 'row', margin: 16}}>
                            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                            <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 description">
                                <div className="descriptionLabel">Descripcion del producto</div>
                                <div className="descriptionText">{item.description}</div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
                        </div>
                    </div>
                </div>
            </CategoryWrapper>
        </>
    );
}