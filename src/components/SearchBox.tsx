interface SearchBoxProps {
    searchProduct: string;
    onClickSearch: () => void;
    onSearchProductChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({searchProduct, onClickSearch, onSearchProductChange}: SearchBoxProps) => {

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            onClickSearch();
        }
    }

    return (
        <div className="searchboxContainer">
            <div className="searchboxContentContainer">
                <div className="logoContainer">
                    <img src="/assets/Logo_ML.png" alt="Mercadolibre logo" />
                </div>
                <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    className="searchBoxInput"
                    onChange={onSearchProductChange}
                    value={searchProduct}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={onClickSearch} className="searchButton">
                    <img src="/assets/ic_Search.png" alt="Buscar" />
                </button>
            </div>
        </div>
    );
}