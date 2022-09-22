import "./ProductImage.css";

interface ProductImageProps {
    image: string;
}

export const ProductImage = ({image}: ProductImageProps) => {
    return (
        <div className="imageContainer">
            <img src={image} className="image" alt="imagen del producto" />
        </div>
    );
}