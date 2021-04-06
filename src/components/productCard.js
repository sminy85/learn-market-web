import {Link} from "react-router-dom";
import {API_URL} from "../config/constants";
import dayjs from "dayjs";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("ko");

function ProductCard (props) {
    const product = props.product;
    return (
        <div className="product-card">
            <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                    <img
                        className="product-img"
                        src={`${API_URL}/${product.imageUrl}`}/>
                </div>
                <div className="product-contents">
                                        <span className="product-name">
                                            {product.name}
                                        </span>
                    <span className="product-price">
                                            {product.price}
                                        </span>
                    <div className="product-footer">
                        <div className="product-seller">
                            <img className="product-avatar" src="/images/icons/avatar.png"/>
                            <span>{product.seller}</span>
                        </div>
                        <span className="product-date">{dayjs(product.createdAt).fromNow()}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;