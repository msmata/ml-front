import { useParams } from "react-router-dom";

export const ItemDetailScreen = () => {

    const { id } = useParams();

    return (
        <span>Detalle de item {id}</span>
    );
};