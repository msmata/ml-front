import { SearchBox } from '../components/SearchBox';

interface SearchBoxViewProps {
    onClickSearch: () => void;
}

export const SearchBoxView = ({onClickSearch}: SearchBoxViewProps) => {
    return (
        <SearchBox onClickSearch={onClickSearch} />
    );
}