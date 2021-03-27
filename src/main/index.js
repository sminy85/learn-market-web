import React from 'react';
import './index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MainPage() {
    const [products, setProducts] = React.useState([]);
    React.useEffect(
        function (){
            axios.get("https://9b39fdc7-149a-460d-8bcd-6357c7e1887c.mock.pstmn.io/products")
                .then(function (result) {
                    const products = result.data.products;
                    console.log(products);
                    setProducts(products);
                }).catch(function (error) {
                console.log('에러 발생 : ', error);
            });
        }, []);

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="./images/icons/logo.png" alt=""/>
                </div>
            </div>

            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png"/>
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    {
                        products.map(function (product, index) {
                            return (
                                <div className="product-card" key={index}>
                                    <Link className="product-link" to={`/products/${index}`}>
                                    <div>
                                        <img
                                            className="product-img"
                                            src={product.imageUrl}
                                            key={index}/>
                                    </div>
                                    <div className="product-contents" key={index}>
                                        <span className="product-name">
                                            {product.name}
                                        </span>
                                        <span className="product-price">
                                            {product.price}
                                        </span>
                                    </div>
                                    <div className="product-seller">
                                        <img className="product-avatar" src="images/icons/avatar.png"/>
                                        <span>
                                            {product.seller}
                                        </span>
                                    </div>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div id="footer">
            </div>
        </div>
    );
}

export default MainPage;