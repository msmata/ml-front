import React, { useCallback, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { SearchBoxView } from "../views/SearchBoxView";

export const SearchBoxScreen = () => {

    const navigate = useNavigate();
    const [searchProduct, setSearchProduct] = useState('');

    const handleSearchProductChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchProduct(event.target.value);
    }, []);

    const handleSearchClick = useCallback(() => {
        if (searchProduct) {
            navigate('/items?search='+ searchProduct);
        } else {
            alert('Debe ingresar un texto');
        }
    }, [navigate, searchProduct]);

    return (
        <SearchBoxView onClickSearch={handleSearchClick} onSearchProductChange={handleSearchProductChange} searchProduct={searchProduct} />
    );
}