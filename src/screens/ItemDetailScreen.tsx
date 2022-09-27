import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    useEffect(() => {
        const loadingData = async () => {
            const data:SingleItemResponse = await getItemDetail(id || '');
            setItem(data.item);
            setBreadcrumb(data.breadcrumb);
        };

        loadingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (item) {
        return (
            <ItemDetailView item={item} breadcrumb={breadcrumb} />
        );
    } else {
        return <InternalError />
    }
};