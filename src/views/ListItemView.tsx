import { CategoryWrapper } from "../components/CategoryWrapper";
import { ProductHeader } from "../components/ProductHeader";
import { SearchBox } from "../components/SearchBox";
import { Item } from "../types/Item";

interface ListItemViewProps {
    items: Item[];
    breadcrumb: string;
    onClickSearch: () => void;
    onSearchProductChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onItemSelect : (itemId: string) => void;
}

export const ListItemView = ({items, breadcrumb, onClickSearch, onSearchProductChange, onItemSelect}: ListItemViewProps) => {
    return (
        <>
            <SearchBox onClickSearch={onClickSearch} onSearchProductChange={onSearchProductChange} />
            <CategoryWrapper breadcrumb={breadcrumb}>
                {items.map(item => {
                    return <ProductHeader key={item.id} item={item} onSelect={() => onItemSelect(item.id)} />;
                })}
            </CategoryWrapper>
        </>
    );
}