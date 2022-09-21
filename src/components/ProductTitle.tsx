interface ProductTitleProps {
    title: string;
}

export const ProductTitle = ({title}: ProductTitleProps) => {
    return (
        <div>{title}</div>
    );
}