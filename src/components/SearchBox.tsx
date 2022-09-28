import './searchBoxView.css';

interface SearchBoxProps {
    searchProduct: string;
    onClickSearch: () => void;
    onSearchProductChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({searchProduct, onClickSearch, onSearchProductChange}: SearchBoxProps) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 contenedorPrincipal">
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 d-flex flex-row-reverse px-3">
                        <img src="/assets/Logo_ML.png" alt="Mercadolibre logo" />
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 contenedorCajaBusqueda">
                        <input type="text" placeholder="Nunca dejes de buscar" style={{width: '100%'}} onChange={onSearchProductChange} value={searchProduct} />
                        <div className="botonBuscar">
                            <img src="/assets/ic_Search.png" alt="Buscar" onClick={onClickSearch} />
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                </div>
            </div>
        </div>
    );
}