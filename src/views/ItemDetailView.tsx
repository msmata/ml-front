import { SingleItem } from "../types/SingleItem";

interface ItemDetailViewProps {
    item: SingleItem
}

export const ItemDetailView = ({item}: ItemDetailViewProps) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{display: "flex", flexDirection: 'row', margin: 16}}>
                    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <img src={item.picture} className="imageDetail" alt="imagen del producto" />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div>{item.condition} - {item.sold_quantity} vendidos</div>
                        <div>{item.title}</div>
                        <div>$ {item.price.amount}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <span>Descripcion del producto</span>
                <span>{item.description}</span>
            </div>
        </div>
    );
}