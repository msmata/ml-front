import React from 'react';
import { SearchBox } from '../components/SearchBox';

interface SearchBoxViewProps {
    onClickSearch: () => void;
    onSearchProductChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBoxView = ({onClickSearch, onSearchProductChange}: SearchBoxViewProps) => {
    return (
        <SearchBox onClickSearch={onClickSearch} onSearchProductChange={onSearchProductChange} />
    );
}