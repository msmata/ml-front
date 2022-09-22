import "./ProductTitle.css"

interface ProductTitleProps {
    title: string;
}

export const ProductTitle = ({title}: ProductTitleProps) => {
    return (
        <div className="title">{title}</div>
    );
}