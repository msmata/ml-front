interface ProductTitleProps {
    title: string;
}

export const ProductTitle = ({title}: ProductTitleProps) => {
    return (
        <span>{title}</span>
    );
}