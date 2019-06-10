
const Price = (props) => {

    //Destructuring
    const { price, percent_change_1h, percent_change_24h, percent_change_7d } = props.price;
    
    return (
        <div className="card  border-success mb-3">
            <div className="card-header">BITCOIN PRICE</div>
                
                <div className="card-body">
                    <h4 className="card-title">Actual price: ${price.toFixed(2)}</h4>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">
                            <span className="font-weight-bold">Last hour: </span> {percent_change_1h} %
                        </p>
                        <p className="card-text">
                            <span className="font-weight-bold">Last day: </span> {percent_change_24h} %
                        </p>
                        <p className="card-text">
                            <span className="font-weight-bold">Last week: </span> {percent_change_7d} %
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default Price;


