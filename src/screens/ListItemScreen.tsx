import { useCallback, useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom';
import { useItems } from '../hooks/useItems';
import { Item } from '../types/Item';
import { ItemResponse } from '../types/ItemResponse';
import { ListItemView } from '../views/ListItemView';

export const ListItemScreen = () => {

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const {listItems, loadingItems} = useItems();
    const [items, setItems] = useState<Item[]>([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        const loadingData = async () => {
            const data:ItemResponse = await listItems(searchQuery);
            setItems(data.items);
        };

        loadingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickSearch = useCallback(async () => {
        const data:ItemResponse = await listItems(searchItem);
        setItems(data.items);
    }, [listItems, searchItem]);

    const handleSearchProductChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.target.value);
    }, []);

    return (
        <ListItemView onClickSearch={handleClickSearch} onSearchProductChange={handleSearchProductChange} items={items} />
    );
}