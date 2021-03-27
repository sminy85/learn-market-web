import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import './index.css';

function ProductPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(function(){
        axios.get(`https://9b39fdc7-149a-460d-8bcd-6357c7e1887c.mock.pstmn.io/products/${id}`)
            .then(function (result){
                setProduct(result.data);
            }).catch(function (error){
                console.error('에러 발생: '+error);
        });
    },[]);

    if(product === null) {
        return <h1>상품 정보를 받고있습니다...</h1>;
    }
    return (
        <div>
            <div id="image-box">
                <img src={"/"+product.imageUrl} alt="product image" />
            </div>
            <div id="profile-box">
                <img src={"/images/icons/avatar.png"} alt="avatar image"/>
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createAt">2021년 03월 27일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;