interface CategoryWrapperProps {
    children: React.ReactNode;
    breadcrumb?: string;
}

export const CategoryWrapper = ({children, breadcrumb}: CategoryWrapperProps) => {
    return (
        <div className="categoryWrapperContainer">
            <div className="categoryWrapperBreadcrumbContainer">
                <span className="breadcrumbText">{breadcrumb}</span>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}