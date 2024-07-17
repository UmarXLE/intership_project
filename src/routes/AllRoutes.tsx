import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../pages/product-detail/ProductDetail';
import MainLayout from '../layouts/main/MainLayout';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>} >
                <Route path='' element={<ProductDetail />} />
            </Route>
        </Routes>
    );
};

export default AllRoutes;