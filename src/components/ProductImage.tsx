import "./ProductImage.css";

interface ProductImageProps {
    image: string;
}

export const ProductImage = ({image}: ProductImageProps) => {
    return (
        <div className="col-sm-2">
            <div className="imageContainer">
                <img src={image} alt="imagen del producto" />
            </div>
        </div>
    );
}