import React,{useState, useEffect} from 'react';
import styled from "./productDetail.module.scss"
import { fetchGraphQLData } from '../../services/service';

const ProductDetail = () => {
    const [data, setData] = useState<any>([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchGraphQLData();
            setData(result);
        }
        fetchData();
    },[])
    return (
        <main className={styled.container}>
            1
        </main>
    );
};

export default ProductDetail;