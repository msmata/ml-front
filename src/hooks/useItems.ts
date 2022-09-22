import { useState } from "react";
import apiClient from "../utils/apiClient"

export const useItems = () => {

    const [loadingItems, setLoadingItems] = useState(false);

    const listItems = async (query: string) => {
        setLoadingItems(true);
        const response = await apiClient.get(`/api/items?query=${query}`);
        setLoadingItems(false);
        return response.data;
    }
    
    return {listItems, loadingItems};
}