import {useParams} from "react-router-dom";

function Product(props) {
    const params = useParams();
    console.log(params)
    return (
        <div className="App">
            <h1>
                Product{params.productID}
            </h1>
        </div>
    );
}

export default Product;
