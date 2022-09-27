import './CategoryWrapper.css';

interface CategoryWrapperProps {
    children: React.ReactNode;
    breadcrumb?: string;
}

export const CategoryWrapper = ({children, breadcrumb}: CategoryWrapperProps) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{margin: 16, display: 'flex', flexDirection: 'row'}}>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        <span className="categoryText">{breadcrumb}</span>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{margin: 16}}>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        {children}
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                </div>
            </div>
        </>
    );
}