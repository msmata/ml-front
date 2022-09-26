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

    useEffect(() => {
        const loadingData = async () => {
            const data:SingleItemResponse = await getItemDetail(id || '');
            setItem(data.item);
        };

        loadingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (item) {
        return (
            <ItemDetailView item={item} />
        );
    } else {
        return <InternalError />
    }
};