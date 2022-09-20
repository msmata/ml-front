import {useSearchParams} from 'react-router-dom';

export const ListItemScreen = () => {

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    return (
        <span>Pantalla de resultados de busqueda para el texto seleccionado: {searchQuery}</span>
    );
}