import { useCallback } from 'react';
import { useNavigate} from 'react-router-dom';
import { SearchBoxView } from "../views/SearchBoxView";

export const SearchBoxScreen = () => {

    const navigate = useNavigate();

    const handleSearchClick = useCallback(() => {
        navigate('/items');
    }, [navigate]);

    return (
        <SearchBoxView onClickSearch={handleSearchClick} />
    );
}