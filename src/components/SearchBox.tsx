import './searchBoxView.css';

export const SearchBox = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 contenedorPrincipal">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-1">
                        <img src="assets/Logo_ML.png" alt="Mercadolibre logo" />
                    </div>
                    <div className="col-sm-9 contenedorCajaBusqueda">
                        <input type="text" placeholder="Nunca dejes de buscar" style={{width: '100%'}} />
                        <div className="botonBuscar">
                            <img src="assets/ic_Search.png" alt="Buscar" />
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </div>
    );
}