import React from 'react';
import { SearchBox } from '../components/SearchBox';

interface SearchBoxViewProps {
    searchProduct: string;
    onClickSearch: () => void;
    onSearchProductChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBoxView = ({searchProduct, onClickSearch, onSearchProductChange}: SearchBoxViewProps) => {
    return (
        <SearchBox onClickSearch={onClickSearch} onSearchProductChange={onSearchProductChange} searchProduct={searchProduct} />
    );
}