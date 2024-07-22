import React,{useState, useEffect} from 'react';
import styled from "./productDetail.module.scss"
import { fetchGraphQLData } from '../../services/service';
import NavigationPanel from '../../components/navigation-panel/NavigationPanel';
import Products from '../../components/products/Products';
import Reviews from '../../components/reviews/Reviews';
import BreadCrums from '../../ui/breadcrums/BreadCrumbs';
import PaymentBlog from '../../components/payment-blog/PaymentBlog';
import ProductInfo from '../../components/product-info/ProductInfo';

const ProductDetail = () => {
    // const [data, setData] = useState<any>([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetchGraphQLData();
    //         setData(result);
    //     }
    //     fetchData();
    // },[])

    
    return (
        <main className={styled.container}>
            <NavigationPanel />
            <BreadCrums links={[{ label: "Главная", url: "" }, { label: "Бытовая техника", url: "" }, { label: "Стиральные машины" }]} />
            {/* <PaymentBlog /> */}
            <ProductInfo/>
            <Reviews/>
            <Products />
        </main>
    );
};

export default ProductDetail;