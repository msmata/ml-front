import './InternalError.css';

export const InternalError = () => {
    return (
        <div className="wrapper">
            <div className="box">
                <h1>500</h1>
                <p>Error.</p>
                <p>&#58;&#40;</p>
                <p><a href="/">Intentar nuevamente!</a></p>
            </div>
        </div>
    );
};