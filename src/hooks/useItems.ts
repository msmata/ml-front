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

    const getItemDetail = async (itemId: string) => {
        setLoadingItems(true);
        const response = await apiClient.get(`/api/items/${itemId}`);
        setLoadingItems(false);
        return response.data;
    }
    
    return {listItems, getItemDetail, loadingItems};
}