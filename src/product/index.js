import React from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import './index.css';
import {API_URL} from '../config/constants.js';
import dayjs from 'dayjs';
import ProductCard from "../components/productCard";

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        axios.get(`${API_URL}/products/${id}`)
            .then((result) => {
                setProduct(result.data.product);
            }).catch((error) => {
                console.error('에러 발생: '+error);
        });
    };

    const getRecommendations = () => {
        axios.get(`${API_URL}/products/${id}/recommendation`)
            .then((result)=>{
                setProducts(result.data.products);
                console.log(result.data.products);
            }).catch((error)=>{
                console.error(error);
        })
    }

    useEffect(() => {
        getProduct();
        getRecommendations();
    }, [id]);

    if(product === null) {
        return <h1>상품 정보를 받고있습니다...</h1>;
    }
    return (
        <div>
            <div id="image-box">
                <img src={`${API_URL}/${product.imageUrl}`} alt="product image" />
            </div>
            <div id="profile-box">
                <img src={"/images/icons/avatar.png"} alt="avatar image"/>
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
                <div id="description-box">
                    <pre id="description">{product.description}</pre>
                </div>
                <div>
                    <h1>추천 상품</h1>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            products.map((product, index) => {
                                return (
                                    <ProductCard product={product} key={index}/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;