import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InternalError } from "../components/InternalError";
import { useItems } from "../hooks/useItems";
import { SingleItem } from "../types/SingleItem";
import { SingleItemResponse } from "../types/SingleItemResponse";
import { ItemDetailView } from "../views/ItemDetailView";

export const ItemDetailScreen = () => {

    const { id } = useParams();
    const { getItemDetail } = useItems();
    const [item, setItem] = useState<SingleItem>();
    const [breadcrumb, setBreadcrumb] = useState('');
    const [searchProduct, setSearchProduct] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loadingData = async () => {
            const data:SingleItemResponse = await getItemDetail(id || '');
            setItem(data.item);
            setSearchProduct(data.item.title);
            setBreadcrumb(data.breadcrumb);
        };
        loadingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearchClick = useCallback(() => {
        if (searchProduct) {
            navigate('/items?search='+ searchProduct);
        } else {
            alert('Debe ingresar un texto');
        }
    }, [navigate, searchProduct]);

    const handleSearchProductChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchProduct(event.target.value);
    }, []);

    if (item) {
        return (
            <ItemDetailView item={item} breadcrumb={breadcrumb} searchProduct={searchProduct} onSearchClick={handleSearchClick} onSearchProductChange={handleSearchProductChange} />
        );
    } else {
        return <InternalError />
    }
};