import { useCallback, useEffect, useState } from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import { InternalError } from '../components/InternalError';
import { useItems } from '../hooks/useItems';
import { Item } from '../types/Item';
import { ItemResponse } from '../types/ItemResponse';
import { ListItemView } from '../views/ListItemView';

export const ListItemScreen = () => {

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const { listItems, errorLoadingItems } = useItems();
    const [items, setItems] = useState<Item[]>([]);
    const  [breadcrumb, setBreadcrumb] = useState('');
    const [searchProduct, setSearchProduct] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loadingData = async () => {
            const data:ItemResponse = await listItems(searchQuery);
            setItems(data.items);
            setBreadcrumb(data.breadcrumb);
        };
        setSearchProduct(searchQuery);
        loadingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickSearch = useCallback(async () => {
        const data:ItemResponse = await listItems(searchProduct);
        setItems(data.items);
        setBreadcrumb(data.breadcrumb);
    }, [listItems, searchProduct]);

    const handleSearchProductChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchProduct(event.target.value);
    }, []);

    const handleItemSelect = useCallback((itemId: string) => {
        navigate(`/items/${itemId}`);
    }, [navigate]);

    if (errorLoadingItems) {
        return <InternalError />;
    }

    return (
        <ListItemView onClickSearch={handleClickSearch} onSearchProductChange={handleSearchProductChange} onItemSelect={handleItemSelect} items={items} breadcrumb={breadcrumb} searchProduct={searchProduct} />
    );
}